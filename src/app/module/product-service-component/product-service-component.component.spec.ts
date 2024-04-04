import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductServiceComponentComponent } from './product-service-component.component';

describe('ProductServiceComponentComponent', () => {
  let component: ProductServiceComponentComponent;
  let fixture: ComponentFixture<ProductServiceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductServiceComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductServiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
