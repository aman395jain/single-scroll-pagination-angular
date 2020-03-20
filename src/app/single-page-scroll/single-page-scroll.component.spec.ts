import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageScrollComponent } from './single-page-scroll.component';

describe('SinglePageScrollComponent', () => {
  let component: SinglePageScrollComponent;
  let fixture: ComponentFixture<SinglePageScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePageScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePageScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
