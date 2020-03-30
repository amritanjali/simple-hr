import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadresComponent } from './headres.component';

describe('HeadresComponent', () => {
  let component: HeadresComponent;
  let fixture: ComponentFixture<HeadresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
