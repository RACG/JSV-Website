import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FortbildungComponent } from './fortbildung.component';

describe('FortbildungComponent', () => {
  let component: FortbildungComponent;
  let fixture: ComponentFixture<FortbildungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FortbildungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortbildungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
