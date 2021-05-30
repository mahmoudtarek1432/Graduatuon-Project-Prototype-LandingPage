import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashItemsComponent } from './items.component';

describe('ItemsComponent', () => {
  let component: DashItemsComponent;
  let fixture: ComponentFixture<DashItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
