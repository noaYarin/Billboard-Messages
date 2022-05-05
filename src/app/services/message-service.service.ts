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
    msg.id = this.generateUUID();
    return this.msgInterface.add({ ...msg });
  }

  updateMessage(updatedmsg: any) {
    this.msgDocument = this.msgInterface.doc(updatedmsg.id)
    this.msgDocument.update(updatedmsg);
  }

  getMsgById(id: string) {
    return this.msgInterface.valueChanges().subscribe(data => data.find((msgId => msgId.id = id)))
  }

  generateUUID(): string {
    let randomUUID = uuidv4();
    return randomUUID;
  }

}


