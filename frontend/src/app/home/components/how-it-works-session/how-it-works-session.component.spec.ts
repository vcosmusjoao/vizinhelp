import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorksSessionComponent } from './how-it-works-session.component';

describe('HowItWorksSessionComponent', () => {
  let component: HowItWorksSessionComponent;
  let fixture: ComponentFixture<HowItWorksSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowItWorksSessionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowItWorksSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
