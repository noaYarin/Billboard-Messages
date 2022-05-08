import { MessageServiceService } from 'src/app/services/message-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/classes/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() message?: Message
  constructor(private messageService: MessageServiceService) { }

  deleteMsg(id: string | undefined) {
    this.messageService.deleteMessage(id ?? '')
      .then(() => console.log('Message deleted'))
      .catch((err: string) => console.log('Error deleting message: ' + err));
  }

}
