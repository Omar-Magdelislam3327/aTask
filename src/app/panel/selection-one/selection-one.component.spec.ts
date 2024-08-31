import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionOneComponent } from './selection-one.component';

describe('SelectionOneComponent', () => {
  let component: SelectionOneComponent;
  let fixture: ComponentFixture<SelectionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
