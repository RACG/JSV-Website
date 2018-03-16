import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UberunsPageComponent } from './uberuns-page.component';

describe('UberunsPageComponent', () => {
  let component: UberunsPageComponent;
  let fixture: ComponentFixture<UberunsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UberunsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UberunsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
