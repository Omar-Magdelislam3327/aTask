import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropOneComponent } from './prop-one.component';

describe('PropOneComponent', () => {
  let component: PropOneComponent;
  let fixture: ComponentFixture<PropOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
