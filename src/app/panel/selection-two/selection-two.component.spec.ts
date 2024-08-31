import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionTwoComponent } from './selection-two.component';

describe('SelectionTwoComponent', () => {
  let component: SelectionTwoComponent;
  let fixture: ComponentFixture<SelectionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
