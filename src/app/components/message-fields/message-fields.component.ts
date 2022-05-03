import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/interfaces/message';
@Component({
  selector: 'app-message-fields',
  templateUrl: './message-fields.component.html',
  styleUrls: ['./message-fields.component.scss']
})
export class MessageFieldsComponent implements OnInit {
  @Input() message?: Message
  @Input() title: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
