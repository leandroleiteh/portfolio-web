import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCardProjectComponent } from './main-card-project.component';

describe('MainCardProjectComponent', () => {
  let component: MainCardProjectComponent;
  let fixture: ComponentFixture<MainCardProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainCardProjectComponent]
    });
    fixture = TestBed.createComponent(MainCardProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
