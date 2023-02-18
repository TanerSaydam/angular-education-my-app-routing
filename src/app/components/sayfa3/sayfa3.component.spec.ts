import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sayfa3Component } from './sayfa3.component';

describe('Sayfa3Component', () => {
  let component: Sayfa3Component;
  let fixture: ComponentFixture<Sayfa3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sayfa3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sayfa3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
