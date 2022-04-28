import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftWordComponent } from './microsoft-word.component';

describe('MicrosoftWordComponent', () => {
  let component: MicrosoftWordComponent;
  let fixture: ComponentFixture<MicrosoftWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrosoftWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrosoftWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
