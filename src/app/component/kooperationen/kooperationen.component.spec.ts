import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KooperationenComponent } from './kooperationen.component';

describe('KooperationenComponent', () => {
  let component: KooperationenComponent;
  let fixture: ComponentFixture<KooperationenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KooperationenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KooperationenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
