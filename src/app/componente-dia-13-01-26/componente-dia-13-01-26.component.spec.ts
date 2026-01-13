import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDia130126Component } from './componente-dia-13-01-26.component';

describe('ComponenteDia130126Component', () => {
  let component: ComponenteDia130126Component;
  let fixture: ComponentFixture<ComponenteDia130126Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteDia130126Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteDia130126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
