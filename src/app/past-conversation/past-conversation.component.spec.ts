import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastConversationComponent } from './past-conversation.component';

describe('PastConversationComponent', () => {
  let component: PastConversationComponent;
  let fixture: ComponentFixture<PastConversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastConversationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
