import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDia090126Component } from './componente-dia-09-01-26.component';

describe('ComponenteDia090126Component', () => {
  let component: ComponenteDia090126Component;
  let fixture: ComponentFixture<ComponenteDia090126Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteDia090126Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteDia090126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
