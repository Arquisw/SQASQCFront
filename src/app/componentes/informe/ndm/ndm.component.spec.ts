import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdmComponent } from './ndm.component';

describe('NdmComponent', () => {
  let component: NdmComponent;
  let fixture: ComponentFixture<NdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
