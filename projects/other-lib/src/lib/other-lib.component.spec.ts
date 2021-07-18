import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherLibComponent } from './other-lib.component';

describe('OtherLibComponent', () => {
  let component: OtherLibComponent;
  let fixture: ComponentFixture<OtherLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
