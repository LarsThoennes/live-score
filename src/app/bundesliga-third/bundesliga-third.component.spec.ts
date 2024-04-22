import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundesligaThirdComponent } from './bundesliga-third.component';

describe('BundesligaThirdComponent', () => {
  let component: BundesligaThirdComponent;
  let fixture: ComponentFixture<BundesligaThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BundesligaThirdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BundesligaThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
