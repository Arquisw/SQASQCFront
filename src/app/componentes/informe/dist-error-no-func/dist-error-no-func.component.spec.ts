import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistErrorNoFuncComponent } from './dist-error-no-func.component';

describe('DistErrorNoFuncComponent', () => {
  let component: DistErrorNoFuncComponent;
  let fixture: ComponentFixture<DistErrorNoFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistErrorNoFuncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistErrorNoFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
