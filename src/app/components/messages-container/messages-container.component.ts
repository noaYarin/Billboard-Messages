import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Message } from 'src/app/classes/message';
import { MessageServiceService } from 'src/app/services/message-service.service';
@Component({
  selector: 'app-messages-container',
  templateUrl: './messages-container.component.html',
  styleUrls: ['./messages-container.component.scss']
})
export class MessagesContainerComponent {
  messages: Message[] = []
  constructor(private msgService: MessageServiceService) {
    this.msgService.getAllMessages().snapshotChanges().pipe(
      map((changes: any[]) =>
        changes.map((msg: any) =>
          ({ id: msg.payload.doc.id, ...msg.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.messages = data;
    });
  }
}