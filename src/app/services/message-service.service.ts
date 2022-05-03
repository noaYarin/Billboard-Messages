import { Injectable } from '@angular/core';
import { Message } from '../interfaces/message';
import { v4 as uuidv4 } from 'uuid';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  databaseUrl = 'https://billboard-8a5e3-default-rtdb.firebaseio.com/messages.json';
  firestore: any;
  constructor(firestore: Firestore, private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  addMessage(message: Message): Observable<Message> {
    message.id = this.generateUUID()
    return this.http.post<Message>(this.databaseUrl, message).pipe(
      catchError(this.handleError)
    );
  }
  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.databaseUrl).pipe(catchError(this.handleError))
      .pipe(map(response => {
        let messages: Message[] = [];
        for (let message in response) {
          console.log(response[message].date);

          messages.push(response[message])
        }
        return messages;
      }))
  }

  generateUUID(): string {
    let randomUUID = uuidv4();
    return randomUUID;
  }
}

