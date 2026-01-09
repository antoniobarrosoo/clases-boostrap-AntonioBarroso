import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntesdenavidadComponent } from './antesdenavidad.component';

describe('AntesdenavidadComponent', () => {
  let component: AntesdenavidadComponent;
  let fixture: ComponentFixture<AntesdenavidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntesdenavidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntesdenavidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
