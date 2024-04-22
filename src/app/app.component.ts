import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'live-score';
  showFiller = false;
  german = false;
  england = false;
  spain = false;

  moreOptions(country: string) {
    this.german = false;
    this.england = false;
    this.spain = false;
    if (country === 'german') {
      this.german = true;
    } else if (country === 'england') {
      this.england = true;
    } else if (country === 'spanien') {
      this.spain = true;
    }
    console.log(`Current status - German: ${this.german}, England: ${this.england}, Spanien: ${this.spain}`);
  }
}
