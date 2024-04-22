import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundesligaSecondComponent } from './bundesliga-second.component';

describe('BundesligaSecondComponent', () => {
  let component: BundesligaSecondComponent;
  let fixture: ComponentFixture<BundesligaSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BundesligaSecondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BundesligaSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
