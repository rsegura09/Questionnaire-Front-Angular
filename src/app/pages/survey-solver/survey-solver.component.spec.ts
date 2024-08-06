import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySolverComponent } from './survey-solver.component';

describe('SurveySolverComponent', () => {
  let component: SurveySolverComponent;
  let fixture: ComponentFixture<SurveySolverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveySolverComponent]
    });
    fixture = TestBed.createComponent(SurveySolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
