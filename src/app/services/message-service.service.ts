import { Injectable } from '@angular/core';
import { Message } from '../classes/message';
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
  updateMessage(msgId: string, updatedmsg: any): Promise<void> {
    return this.angularFs.collection('billboard-messages').doc(msgId).update(updatedmsg);
  }
  deleteMessage(msgId: string): Promise<any> {
    return this.angularFs.collection('billboard-messages').doc(msgId).delete();
  }

}

