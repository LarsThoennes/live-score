import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FootballDataService } from '../football-data.service';

@Component({
  selector: 'app-bundesliga-second',
  templateUrl: './bundesliga-second.component.html',
  styleUrl: './bundesliga-second.component.scss'
})
export class BundesligaSecondComponent implements OnInit {
  bundesligaSecondTable: any [] = [];
  bundesligaSecondGameDay: any [] = [];
  bundesligaSecondLiveMatches: any [] = [];
  displayedColumns: string[] = ['demo-Rank', 'demo-Team', 'demo-Pionts','demo-Matches','demo-Goaldif','demo-Goal scored','demo-Goal conceded','demo-won','demo-lost','demo-drwan' ];

  constructor(private footballDataService: FootballDataService, private el: ElementRef) {}

  ngOnInit(): void {
    this.fetchBundesligaSecondTable();
    this.fetchBundesligaSecondGameDay();
    this.fetchBundesligaSecondLiveMatches();
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
    return index === 16 || index === 17;
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
    this.footballDataService.get2BundesligaTable().subscribe(
      (leagues: any) => {
        console.log('API Response:', leagues);

        if (leagues.success && leagues.data && Array.isArray(leagues.data.table) && leagues.data.table.length > 0) {
          this.bundesligaSecondTable = leagues.data.table.map((table: any) => {
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
          this.bundesligaSecondTable = [];
        }
      },
    )};

    fetchBundesligaSecondGameDay() {
      this.footballDataService.get2BundesligaGameDay().subscribe(
        (gameDay: any) => {
          console.log('API Response:', gameDay);

          if (gameDay.success && gameDay.data && Array.isArray(gameDay.data.fixtures) && gameDay.data.fixtures.length > 0) {
            this.bundesligaSecondGameDay = gameDay.data.fixtures.map((game: any) => {
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
            console.log('BundesligaGameDay', this.bundesligaSecondGameDay);
          } else {
            console.warn('Kein Spieltag verfügbar');
            this.bundesligaSecondGameDay = [];
          }
        },
        (error: any) => {
          console.error('API Error:', error);
          this.bundesligaSecondGameDay = [];
        }
      )};

      fetchBundesligaSecondLiveMatches() {
        this.footballDataService.get2BundesligaLiveMatches().subscribe(
          (liveMatch: any) => {
            console.log('API Response:', liveMatch);

            if (liveMatch.success && liveMatch.data && Array.isArray(liveMatch.data.match) && liveMatch.data.match.length > 0) {
              this.bundesligaSecondLiveMatches = liveMatch.data.match.map((liveMatch: any) => {
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
              console.log('Bundesliga live matches', this.bundesligaSecondLiveMatches);
            } else {
              console.warn('Keine Live Spiele verfügbar');
              this.bundesligaSecondLiveMatches = [];
            }
          },
          (error: any) => {
            console.error('API Error:', error);
            this.bundesligaSecondLiveMatches = [];
          }
        )};

}
