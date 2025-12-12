import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dia1212Component } from './dia1212.component';

describe('Dia1212Component', () => {
  let component: Dia1212Component;
  let fixture: ComponentFixture<Dia1212Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dia1212Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dia1212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
