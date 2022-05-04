import { Component } from '@angular/core';
import { Message } from 'src/app/interfaces/message';
import { MessageServiceService } from 'src/app/services/message-service.service';
@Component({
  selector: 'app-messages-container',
  templateUrl: './messages-container.component.html',
  styleUrls: ['./messages-container.component.scss']
})
export class MessagesContainerComponent {
  messages: Message[] = []
  constructor(private msgService: MessageServiceService) {
    this.msgService.getMessages().subscribe((n => {
      this.messages = n.map((e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Message
      }))
    }))
  }
}