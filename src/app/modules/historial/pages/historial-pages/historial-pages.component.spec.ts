import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialPagesComponent } from './historial-pages.component';

describe('HistorialPagesComponent', () => {
  let component: HistorialPagesComponent;
  let fixture: ComponentFixture<HistorialPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorialPagesComponent]
    });
    fixture = TestBed.createComponent(HistorialPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
