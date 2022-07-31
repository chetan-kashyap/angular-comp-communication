import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private isShowMessage = new Subject<boolean>();
  private isShowMessageDisabled = new Subject<boolean>();

  isShowMessageValue = this.isShowMessage.asObservable();
  isShowMessageDisabledValue = this.isShowMessageDisabled.asObservable();

  setMessageValue(val: boolean) {
    this.isShowMessage.next(val);
  }
  setShowMessageDisabledValue(val: boolean) {
    this.isShowMessageDisabled.next(val);
  }
}
