import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SexuelleGewaltComponent } from './sexuelle-gewalt.component';

describe('SexuelleGewaltComponent', () => {
  let component: SexuelleGewaltComponent;
  let fixture: ComponentFixture<SexuelleGewaltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SexuelleGewaltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SexuelleGewaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
