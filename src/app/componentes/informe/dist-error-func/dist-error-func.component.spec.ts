import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistErrorFuncComponent } from './dist-error-func.component';

describe('DistErrorFuncComponent', () => {
  let component: DistErrorFuncComponent;
  let fixture: ComponentFixture<DistErrorFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistErrorFuncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistErrorFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
