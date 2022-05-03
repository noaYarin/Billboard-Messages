import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageFieldsComponent } from './message-fields.component';

describe('MessageFieldsComponent', () => {
  let component: MessageFieldsComponent;
  let fixture: ComponentFixture<MessageFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
