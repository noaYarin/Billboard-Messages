import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Message } from 'src/app/classes/message';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { serverTimestamp } from "firebase/firestore";
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
        return changes.map((a: any) => {
          const data = a.payload.doc.data() as Message[];
          const id = a.payload.doc.id
          return {
            id,
            ...data
          };
        })
      })
    ).subscribe((data: any[]) => {
      this.messages = data;
      data.forEach((msgDate) => msgDate.date = new Date(msgDate.date.seconds * 1000));
    });
  }

}

