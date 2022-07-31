import { Component } from '@angular/core';
import { MessageService } from '../svc/message.service';

@Component({
  selector: 'app-Message-Panel',
  templateUrl: './message-panel.component.html',
  styleUrls: ['../app.component.css'],
})
export class MessagePanelComponent {
  isShowMessageVal: boolean;
  constructor(private msgSvc: MessageService) {}
  showMessage(): boolean {
    this.msgSvc.isShowMessageValue.subscribe(
      (x) => (this.isShowMessageVal = x)
    );
    return this.isShowMessageVal;
  }
}
