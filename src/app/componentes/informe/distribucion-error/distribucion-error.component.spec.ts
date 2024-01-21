import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucionErrorComponent } from './distribucion-error.component';

describe('DistribucionErrorComponent', () => {
  let component: DistribucionErrorComponent;
  let fixture: ComponentFixture<DistribucionErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistribucionErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistribucionErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
