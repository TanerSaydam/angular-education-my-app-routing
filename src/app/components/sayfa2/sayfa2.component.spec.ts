import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sayfa2Component } from './sayfa2.component';

describe('Sayfa2Component', () => {
  let component: Sayfa2Component;
  let fixture: ComponentFixture<Sayfa2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sayfa2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sayfa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
