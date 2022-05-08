import { Injectable } from '@angular/core';
import { Message } from '../classes/message';
import { v4 as uuidv4 } from 'uuid';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  msgInterface: AngularFirestoreCollection<Message>;
  msgDocument: AngularFirestoreDocument<Message> | undefined;

  constructor(private angularFs: AngularFirestore) {
    this.msgInterface = this.angularFs.collection('billboard-messages', ref => ref.orderBy('date', 'desc'));
  }

  getAllMessages(): AngularFirestoreCollection<Message> {
    return this.msgInterface;
  }
  addMessage(msg: Message): any {
    return this.msgInterface.add({ ...msg });

  }

  updateMessage(id: string, updatedmsg: any): Promise<void> {
    return this.angularFs.collection('billboard-messages').doc(`editMessage/${id}`).update(updatedmsg);
  }

}
