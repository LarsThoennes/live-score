import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballDataService {

  private apiUrl = 'https://livescore-api.com/api-client/';
  private apiKey = 'psTOhf7y68G9z4VB';
  private apiSecret = 'UsqzdYkbxFZoRAgh295kpcTvlzFVDAwy';

  constructor(private http: HttpClient) { }

  // Generische Funktion für HTTP-GET-Anfragen
  private getApiData(path: string, competitionId: number): Observable<any> {
    const url = `${this.apiUrl}${path}?competition_id=${competitionId}&key=${this.apiKey}&secret=${this.apiSecret}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(url, { headers });
  }

  getFootballMatches(): Observable<any> {
    const url = `${this.apiUrl}matches/live.json?key=${this.apiKey}&secret=${this.apiSecret}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(url, { headers });
  }

  // Funktionen für Bundesliga
  getBundesligaTable(): Observable<any> {
    return this.getApiData('leagues/table.json', 1);
  }

  getBundesligaGameDay(): Observable<any> {
    return this.getApiData('fixtures/matches.json', 1);
  }

  getBundesligaLiveMatches(): Observable<any> {
    return this.getApiData('matches/live.json', 1);
  }

  // Funktionen für 2. Bundesliga
  get2BundesligaTable(): Observable<any> {
    return this.getApiData('leagues/table.json', 93);
  }

  get2BundesligaGameDay(): Observable<any> {
    return this.getApiData('fixtures/matches.json', 93);
  }

  get2BundesligaLiveMatches(): Observable<any> {
    return this.getApiData('matches/live.json', 93);
  }

  // Funktionen für 3. Bundesliga
  get3BundesligaTable(): Observable<any> {
    return this.getApiData('leagues/table.json', 166);
  }

  get3BundesligaGameDay(): Observable<any> {
    return this.getApiData('fixtures/matches.json', 166);
  }

  get3BundesligaLiveMatches(): Observable<any> {
    return this.getApiData('matches/live.json', 166);
  }
}
