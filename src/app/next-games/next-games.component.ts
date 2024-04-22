import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../football-data.service';

@Component({
  selector: 'app-next-games',
  templateUrl: './next-games.component.html',
  styleUrls: ['./next-games.component.scss']
})
export class NextGamesComponent implements OnInit {
  footballMatches: any[] = [];

  constructor(private footballDataService: FootballDataService) { }

  ngOnInit(): void {
    this.fetchFootballMatches();
  }

  fetchFootballMatches(): void {
    this.footballDataService.getFootballMatches().subscribe(
      (matches: any) => {
        if (matches.success && matches.data && Array.isArray(matches.data.match)) {
          this.footballMatches = matches.data.match.map((match: any) => {
            return {
              homeTeam: match.home.name,
              awayTeam: match.away.name,
              status: match.status,
              location: match.location,
              score: match.scores.score,
              scheduled: match.scheduled
            };
          });
          console.log(this.footballMatches);
        } else {
          console.error('Error fetching football matches:', matches.error_message);
        }
      },
      (error: any) => {
        console.error('Error fetching football matches:', error);
      }
    );
  }
}
