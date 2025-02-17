import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFound404Component } from './no-found404.component';

describe('NoFound404Component', () => {
  let component: NoFound404Component;
  let fixture: ComponentFixture<NoFound404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoFound404Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoFound404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
