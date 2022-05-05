import { MessageServiceService } from './../../services/message-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/classes/message';

@Component({
  selector: 'app-message-fields',
  templateUrl: './message-fields.component.html',
  styleUrls: ['./message-fields.component.scss']
})
export class MessageFieldsComponent {
  @Input() message: Message = new Message('', '', new Date(), false);
  @Input() title: string = ''

  constructor(private msgService: MessageServiceService) { }
  addMsg() {
    let msgObject = {
      id: '',
      message: this.message.message,
      isSeen: this.message.isSeen,
      date: this.message.date
    }
    this.msgService.addMessage(msgObject)
    this.message.date = new Date();
    this.message.message = ''
    this.message.isSeen = false
  }

}
