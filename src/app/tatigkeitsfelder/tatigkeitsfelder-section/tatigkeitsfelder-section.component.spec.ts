import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TatigkeitsfelderSectionComponent } from './tatigkeitsfelder-section.component';

describe('TatigkeitsfelderSectionComponent', () => {
  let component: TatigkeitsfelderSectionComponent;
  let fixture: ComponentFixture<TatigkeitsfelderSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TatigkeitsfelderSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TatigkeitsfelderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
