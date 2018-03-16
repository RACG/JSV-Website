import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatenschutzerklarungComponent } from './datenschutzerklarung.component';

describe('DatenschutzerklarungComponent', () => {
  let component: DatenschutzerklarungComponent;
  let fixture: ComponentFixture<DatenschutzerklarungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatenschutzerklarungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatenschutzerklarungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
