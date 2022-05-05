import { MessageServiceService } from 'src/app/services/message-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/classes/message';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-message-page',
  templateUrl: './edit-message-page.component.html',
  styleUrls: ['./edit-message-page.component.scss']
})
export class EditMessagePageComponent {
  @Input() message: Message = new Message('', '', new Date(), false);
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private messageServiceService: MessageServiceService) { }

  saveMsg() {
    let msgId = this.route.snapshot.paramMap.get('msgId') ?? ''
    const newMsg = {
      id: msgId,
      message: this.message.message,
      date: this.message.date,
      isSeen: this.message.isSeen
    };
    this.messageServiceService.updateMessage(newMsg)
    this.router.navigate(['..']);
  }
}
