import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarpersonaPage } from './editarpersona.page';

describe('EditarpersonaPage', () => {
  let component: EditarpersonaPage;
  let fixture: ComponentFixture<EditarpersonaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarpersonaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarpersonaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
