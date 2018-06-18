import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicNumberComponent } from './magic-number.component';

describe('MagicNumberComponent', () => {
  let component: MagicNumberComponent;
  let fixture: ComponentFixture<MagicNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
