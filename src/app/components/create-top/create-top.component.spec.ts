import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTopComponent } from './create-top.component';

describe('CreateTopComponent', () => {
  let component: CreateTopComponent;
  let fixture: ComponentFixture<CreateTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
