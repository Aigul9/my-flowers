import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketBoxComponent } from './basket-box.component';

describe('BasketBoxComponent', () => {
  let component: BasketBoxComponent;
  let fixture: ComponentFixture<BasketBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
