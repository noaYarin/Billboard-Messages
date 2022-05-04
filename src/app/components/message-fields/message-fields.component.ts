import { MessageServiceService } from './../../services/message-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/interfaces/message';

@Component({
  selector: 'app-message-fields',
  templateUrl: './message-fields.component.html',
  styleUrls: ['./message-fields.component.scss']
})
export class MessageFieldsComponent {
  messages: Message[] = []
  @Input() message?: Message
  @Input() title: string = ''
  msg = ''
  date = new Date()
  isSeen = false
  constructor(private msgService: MessageServiceService) { }
  addMsg() {
    let msgObject = {
      id: '',
      message: this.msg,
      isSeen: this.isSeen,
      date: new Date(this.date)
    }
    this.msgService.addMessage(msgObject)
      .then(res => this.messages.push(res))
      .catch(err => console.log(err))

    this.msg = ''
    this.isSeen = false
  }

}
