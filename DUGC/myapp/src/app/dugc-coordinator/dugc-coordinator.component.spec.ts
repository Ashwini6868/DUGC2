import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DugcCoordinatorComponent } from './dugc-coordinator.component';

describe('DugcCoordinatorComponent', () => {
  let component: DugcCoordinatorComponent;
  let fixture: ComponentFixture<DugcCoordinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DugcCoordinatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DugcCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
