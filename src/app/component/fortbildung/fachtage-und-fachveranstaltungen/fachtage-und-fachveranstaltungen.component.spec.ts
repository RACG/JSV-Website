import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FachtageUndFachveranstaltungenComponent } from './fachtage-und-fachveranstaltungen.component';

describe('FachtageUndFachveranstaltungenComponent', () => {
  let component: FachtageUndFachveranstaltungenComponent;
  let fixture: ComponentFixture<FachtageUndFachveranstaltungenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FachtageUndFachveranstaltungenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FachtageUndFachveranstaltungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
