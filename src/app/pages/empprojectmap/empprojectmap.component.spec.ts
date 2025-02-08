import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpprojectmapComponent } from './empprojectmap.component';

describe('EmpprojectmapComponent', () => {
  let component: EmpprojectmapComponent;
  let fixture: ComponentFixture<EmpprojectmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpprojectmapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpprojectmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
