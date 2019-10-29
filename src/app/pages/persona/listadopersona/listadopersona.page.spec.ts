import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadopersonaPage } from './listadopersona.page';

describe('ListadopersonaPage', () => {
  let component: ListadopersonaPage;
  let fixture: ComponentFixture<ListadopersonaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadopersonaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadopersonaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
