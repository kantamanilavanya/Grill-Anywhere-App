import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillerInfoComponent } from './griller-info.component';

describe('GrillerInfoComponent', () => {
  let component: GrillerInfoComponent;
  let fixture: ComponentFixture<GrillerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
