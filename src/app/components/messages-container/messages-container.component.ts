import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-messages-container',
  templateUrl: './messages-container.component.html',
  styleUrls: ['./messages-container.component.scss']
})
export class MessagesContainerComponent {
  messages$: Observable<any[]>
  constructor(firestore: Firestore) {
    const messagesCollection = collection(firestore, 'billboard-messages');
    this.messages$ = collectionData(messagesCollection);
  }
}
