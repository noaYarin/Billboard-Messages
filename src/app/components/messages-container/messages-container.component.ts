import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/classes/message';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { map } from 'rxjs';
;
@Component({
  selector: 'app-messages-container',
  templateUrl: './messages-container.component.html',
  styleUrls: ['./messages-container.component.scss']
})
export class MessagesContainerComponent {
  messages: Message[] = []

  constructor(private msgService: MessageServiceService) {

    this.msgService.getAllMessages().snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((msg: any) => {
          const data = msg.payload.doc.data()
          data.id = msg.payload.doc.id
          data.date = data.date
          return { ...data };
        })
      })
    ).subscribe((data: Message[]) => {
      this.messages = data;
    });
  }

}



