import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExButtonComponent } from './exbutton.component';

describe('ExButtonComponent', () => {
  let component: ExButtonComponent;
  let fixture: ComponentFixture<ExButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
