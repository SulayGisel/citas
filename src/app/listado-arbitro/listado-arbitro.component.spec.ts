import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoArbitroComponent } from './listado-arbitro.component';

describe('ListadoArbitroComponent', () => {
  let component: ListadoArbitroComponent;
  let fixture: ComponentFixture<ListadoArbitroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoArbitroComponent]
    });
    fixture = TestBed.createComponent(ListadoArbitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
