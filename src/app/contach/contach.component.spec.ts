import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContachComponent } from './contach.component';

describe('ContachComponent', () => {
  let component: ContachComponent;
  let fixture: ComponentFixture<ContachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
