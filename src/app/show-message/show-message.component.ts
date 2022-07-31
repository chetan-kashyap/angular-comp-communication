import { Component } from '@angular/core';
import { MessageService } from '../svc/message.service';

@Component({
  selector: 'app-Show-Message',
  template: `<button (click)="showMessage()" [disabled]="isShowMessageDisabled" class="show-msg-btn">Show message</button>`,
  styleUrls: ['../app.component.css'],
})
export class ShowMessageComponent {
  isShowMessage: boolean;
  isShowMessageDisabled: boolean;

  constructor(private msgSvc: MessageService) {
    this.msgSvc.isShowMessageDisabledValue.subscribe(
      (x) => (this.isShowMessageDisabled = x)
    );
  }
  showMessage() {
    this.msgSvc.setMessageValue(true);
    this.msgSvc.setShowMessageDisabledValue(true);
  }
}
