import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDia140126Component } from './componente-dia-14-01-26.component';

describe('ComponenteDia140126Component', () => {
  let component: ComponenteDia140126Component;
  let fixture: ComponentFixture<ComponenteDia140126Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteDia140126Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteDia140126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
