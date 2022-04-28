import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatServeursComponent } from './etat-serveurs.component';

describe('EtatServeursComponent', () => {
  let component: EtatServeursComponent;
  let fixture: ComponentFixture<EtatServeursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatServeursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatServeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
