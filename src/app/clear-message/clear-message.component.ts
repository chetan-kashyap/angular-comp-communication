import { Component } from '@angular/core';
import { MessageService } from '../svc/message.service';

@Component({
  selector: 'app-Clear-Message',
  templateUrl: './clear-message.component.html',
  styleUrls: ['../app.component.css'],
})
export class ClearMessageComponent {
  isShowMessage: boolean;
  isShowMessageDisabled: boolean;

  constructor(private msgSvc: MessageService) {
    this.msgSvc.isShowMessageDisabledValue.subscribe(
      (x) => (this.isShowMessageDisabled = x)
    );
  }
  clearMessage() {
    this.msgSvc.setShowMessageDisabledValue(false);
    this.msgSvc.setMessageValue(false);
  }
}
