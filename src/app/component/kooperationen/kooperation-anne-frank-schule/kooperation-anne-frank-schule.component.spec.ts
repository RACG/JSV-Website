import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KooperationAnneFrankSchuleComponent } from './kooperation-anne-frank-schule.component';

describe('KooperationAnneFrankSchuleComponent', () => {
  let component: KooperationAnneFrankSchuleComponent;
  let fixture: ComponentFixture<KooperationAnneFrankSchuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KooperationAnneFrankSchuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KooperationAnneFrankSchuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
