import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartSumComponent } from './part-sum.component';

describe('PartSumComponent', () => {
  let component: PartSumComponent;
  let fixture: ComponentFixture<PartSumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartSumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
