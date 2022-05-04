import { Injectable } from '@angular/core';
import { Message } from '../interfaces/message';
import { v4 as uuidv4 } from 'uuid';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  constructor(public angularFs: AngularFirestore) { }

  getMessages() {
    return this.angularFs.collection('billboard-messages').snapshotChanges()
  }

  addMessage(msg: Message) {
    return new Promise<any>((resolve, reject) => {
      msg.id = this.generateUUID();
      this.angularFs.collection('billboard-messages').add(msg)
        .then((res => {
          resolve(res);
        }))
        .catch(err => {
          reject(err);
        })
    })
  }

  generateUUID(): string {
    let randomUUID = uuidv4();
    return randomUUID;
  }

  getMsgById(messageId: string) {
    return this.angularFs.collection('billboard-messages').doc(messageId).snapshotChanges()
  }

}


