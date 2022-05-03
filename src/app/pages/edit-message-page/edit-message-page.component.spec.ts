import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMessagePageComponent } from './edit-message-page.component';

describe('EditMessagePageComponent', () => {
  let component: EditMessagePageComponent;
  let fixture: ComponentFixture<EditMessagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMessagePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMessagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
