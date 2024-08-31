import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropTwoComponent } from './prop-two.component';

describe('PropTwoComponent', () => {
  let component: PropTwoComponent;
  let fixture: ComponentFixture<PropTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
