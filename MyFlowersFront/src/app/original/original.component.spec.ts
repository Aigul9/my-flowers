import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalComponent } from './original.component';

describe('OriginalComponent', () => {
  let component: OriginalComponent;
  let fixture: ComponentFixture<OriginalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
