import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HatBoxComponent } from './hat-box.component';

describe('HatBoxComponent', () => {
  let component: HatBoxComponent;
  let fixture: ComponentFixture<HatBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HatBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HatBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
