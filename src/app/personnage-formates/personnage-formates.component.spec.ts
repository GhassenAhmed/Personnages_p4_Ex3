import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnageFormatesComponent } from './personnage-formates.component';

describe('PersonnageFormatesComponent', () => {
  let component: PersonnageFormatesComponent;
  let fixture: ComponentFixture<PersonnageFormatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonnageFormatesComponent]
    });
    fixture = TestBed.createComponent(PersonnageFormatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
