import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallepersonaPage } from './detallepersona.page';

describe('DetallepersonaPage', () => {
  let component: DetallepersonaPage;
  let fixture: ComponentFixture<DetallepersonaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallepersonaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallepersonaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
