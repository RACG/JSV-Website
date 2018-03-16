import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BfdComponent } from './bfd.component';

describe('BfdComponent', () => {
  let component: BfdComponent;
  let fixture: ComponentFixture<BfdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BfdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BfdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
