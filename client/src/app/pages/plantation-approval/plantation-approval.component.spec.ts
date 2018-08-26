import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantationApprovalComponent } from './plantation-approval.component';

describe('PlantationApprovalComponent', () => {
  let component: PlantationApprovalComponent;
  let fixture: ComponentFixture<PlantationApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantationApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantationApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
