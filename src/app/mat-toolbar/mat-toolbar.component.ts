import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-toolbar',
  templateUrl: './mat-toolbar.component.html',
  styleUrls: ['./mat-toolbar.component.scss']
})
export class MatToolbarComponent implements OnInit {

  @ViewChild('liveGames1Bundesliga', { static: true }) liveGames1Bundesliga!: ElementRef;
  @ViewChild('NextGames1Bundesliga', { static: true }) NextGames1Bundesliga!: ElementRef;
  @ViewChild('table1Bundesliga', { static: true }) table1Bundesliga!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    console.log('liveGames1Bundesliga:', this.liveGames1Bundesliga);
    console.log('NextGames1Bundesliga:', this.NextGames1Bundesliga);
    console.log('table1Bundesliga:', this.table1Bundesliga);
  }

  scrollTo(id: string) {
    let element: HTMLElement | null = null;

    switch (id) {
      case 'liveGames1Bundesliga':
        element = this.liveGames1Bundesliga?.nativeElement;
        break;
      case 'NextGames1Bundesliga':
        element = this.NextGames1Bundesliga?.nativeElement;
        break;
      case 'table1Bundesliga':
        element = this.table1Bundesliga?.nativeElement;
        break;
    }

    if (element) {
      console.log('Scrolling to element:', element);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn('Element not found:', id);
    }
  }
}
