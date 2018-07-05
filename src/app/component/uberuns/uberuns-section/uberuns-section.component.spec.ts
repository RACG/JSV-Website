import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UberunsSectionComponent } from './uberuns-section.component';

describe('UberunsSectionComponent', () => {
  let component: UberunsSectionComponent;
  let fixture: ComponentFixture<UberunsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UberunsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UberunsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
