import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeesComponent } from './coffees.component';

describe('CoffeesComponent', () => {
  let component: CoffeesComponent;
  let fixture: ComponentFixture<CoffeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeesComponent]
    });
    fixture = TestBed.createComponent(CoffeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
