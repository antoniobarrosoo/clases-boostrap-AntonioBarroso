import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDia160126Component } from './componente-dia-16-01-26.component';

describe('ComponenteDia160126Component', () => {
  let component: ComponenteDia160126Component;
  let fixture: ComponentFixture<ComponenteDia160126Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteDia160126Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteDia160126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
