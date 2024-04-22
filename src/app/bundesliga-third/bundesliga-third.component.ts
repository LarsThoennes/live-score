import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FootballDataService } from '../football-data.service';
// import { MatToolbarComponent } from '../mat-toolbar/mat-toolbar.component';


@Component({
  selector: 'app-bundesliga-third',
  templateUrl: './bundesliga-third.component.html',
  styleUrl: './bundesliga-third.component.scss',
})
export class BundesligaThirdComponent implements OnInit {
  bundesligaThirdTable: any [] = [];
  bundesligaThirdGameDay: any [] = [];
  bundesligaThirdLiveMatches: any [] = [];
  displayedColumns: string[] = ['demo-Rank', 'demo-Team', 'demo-Pionts','demo-Matches','demo-Goaldif','demo-Goal scored','demo-Goal conceded','demo-won','demo-lost','demo-drwan' ];

  constructor(private footballDataService: FootballDataService, private el: ElementRef) {}


  ngOnInit(): void {
    this.fetchBundesligaSecondTable();
    this.fetchBundesligaThirdGameDay();
    this.fetchBundesligaThirdLiveMatches();
  }

  scrollTo(id: string) {
    const element = this.el.nativeElement.querySelector('#' + id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return false;
  }

  isRedRowRelegation(index:number): boolean {
    return index === 15;
  }

  isRedRowDescent(index: number): boolean {
    return index === 16 || index === 17 || index === 18 || index === 19;
  }

  isGreenRise(index: number): boolean {
    return index === 0 || index === 1;
  }

  isGreenRelegation(index: number): boolean {
    return index === 2;
  }

  getOddsKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  getOddsKeysLive(obj: any): string[] {
    return Object.keys(obj);
  }

  fetchBundesligaSecondTable() {
    this.footballDataService.get3BundesligaTable().subscribe(
      (leagues: any) => {
        console.log('API Response:', leagues);

        if (leagues.success && leagues.data && Array.isArray(leagues.data.table) && leagues.data.table.length > 0) {
          this.bundesligaThirdTable = leagues.data.table.map((table: any) => {
            return {
              name: table.name,
              rank: table.rank,
              points: table.points,
              matches: table.matches,
              goalDifference: table.goal_diff,
              goalsScored: table.goals_scored,
              goalsConceded: table.goals_conceded,
              lost: table.lost,
              drawn: table.drawn,
              won: table.won,
              teamId: table.team_id
            };
          });
        } else {
          console.warn('No Bundesliga table available');
          this.bundesligaThirdTable = [];
        }
      },
    )};

    fetchBundesligaThirdGameDay() {
      this.footballDataService.get3BundesligaGameDay().subscribe(
        (gameDay: any) => {
          console.log('API Response:', gameDay);

          if (gameDay.success && gameDay.data && Array.isArray(gameDay.data.fixtures) && gameDay.data.fixtures.length > 0) {
            this.bundesligaThirdGameDay = gameDay.data.fixtures.map((game: any) => {
              return {
                awayTeam: game.away_name,
                homeTeam: game.home_name,
                location: game.location,
                starttime: game.time,
                oddsPre: game.odds.pre,
                oddsLive: game.odds.live,
                date: game.date,
                competition: game.competition.name
              };
            });
            console.log('BundesligaGameDay', this.bundesligaThirdGameDay);
          } else {
            console.warn('Kein Spieltag verfügbar');
            this.bundesligaThirdGameDay = [];
          }
        },
        (error: any) => {
          console.error('API Error:', error);
          this.bundesligaThirdGameDay = [];
        }
      )};

      fetchBundesligaThirdLiveMatches() {
        this.footballDataService.get3BundesligaLiveMatches().subscribe(
          (liveMatch: any) => {
            console.log('API Response:', liveMatch);

            if (liveMatch.success && liveMatch.data && Array.isArray(liveMatch.data.match) && liveMatch.data.match.length > 0) {
              this.bundesligaThirdLiveMatches = liveMatch.data.match.map((liveMatch: any) => {
                return {
                  homeTeam: liveMatch.home.name,
                  location: liveMatch.home.stadium,
                  competition: liveMatch.competition.name,
                  gameMinute: liveMatch.time,
                  oddsPre: liveMatch.odds.pre,
                  oddsLive: liveMatch.odds.live,
                  status: liveMatch.status,
                  awayTeam: liveMatch.away.name,
                  lastChange: liveMatch.last_changed,
                  outcomesHalfTime: liveMatch.outcomes.half_time,
                  outcomesFullTime: liveMatch.outcomes.full_time,
                  outcomesExtraTime: liveMatch.outcomes.extra_time,
                  score: liveMatch.scores.score,
                  scoreHalfTime: liveMatch.scores.ht_scores,
                  scoreFullTime: liveMatch.scores.ft_score,
                  scoreExtraTime: liveMatch.scores.et_score,
                };
              });
              console.log('Bundesliga live matches', this.bundesligaThirdLiveMatches);
            } else {
              console.warn('Keine Live Spiele verfügbar');
              this.bundesligaThirdLiveMatches = [];
            }
          },
          (error: any) => {
            console.error('API Error:', error);
            this.bundesligaThirdLiveMatches = [];
          }
        )};
}
