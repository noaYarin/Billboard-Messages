import { MessageServiceService } from 'src/app/services/message-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/interfaces/message';
import { ActivatedRoute, ParamMap, } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message?: Message
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private msgService: MessageServiceService) { }

  ngOnInit(): void {
    this.message = this.route.paramMap.pipe(switchMap((params: ParamMap) => {
      let messageId = params.get('id');
      return this.msgService.getMsgById(messageId);
    })
  })

}
