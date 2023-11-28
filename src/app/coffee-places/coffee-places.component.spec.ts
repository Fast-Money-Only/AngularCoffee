import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeePlacesComponent } from './coffee-places.component';

describe('CoffeePlacesComponent', () => {
  let component: CoffeePlacesComponent;
  let fixture: ComponentFixture<CoffeePlacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeePlacesComponent]
    });
    fixture = TestBed.createComponent(CoffeePlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
