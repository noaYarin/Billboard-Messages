import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardPageComponent } from './billboard-page.component';

describe('BillboardPageComponent', () => {
  let component: BillboardPageComponent;
  let fixture: ComponentFixture<BillboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
