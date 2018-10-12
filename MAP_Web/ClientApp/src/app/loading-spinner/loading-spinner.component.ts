import { Component } from '@angular/core';
import {MatBottomSheetConfig, MatBottomSheetRef} from '@angular/material';
const defaultConfig = new MatBottomSheetConfig();
@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent{
  config: MatBottomSheetConfig = {
    hasBackdrop: defaultConfig.hasBackdrop,
    disableClose: true,
    backdropClass: defaultConfig.backdropClass,
    direction: 'ltr'
  };
  color = 'accent';
  mode = 'indeterminate';
  // value = 20;
  message='Please Wait...'
  constructor(private bottomSheetRef: MatBottomSheetRef<LoadingSpinnerComponent>) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
