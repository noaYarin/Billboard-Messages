import { Message } from 'src/app/classes/message';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-message-page',
  templateUrl: './add-message-page.component.html',
  styleUrls: ['./add-message-page.component.scss']
})
export class AddMessagePageComponent implements OnInit {
  @Input() message: Message = new Message('', '', new Date(), false);
  constructor() { }

  ngOnInit(): void {
  }

}
