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
    this.msgService.getMessages().subscribe((msg: Message[]) => {
      this.messages = msg
    })
  }

}

