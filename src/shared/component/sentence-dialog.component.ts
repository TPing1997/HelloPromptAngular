import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'sentence-dialog',
  templateUrl: './sentence-dialog.component.html',
})
export class SentenceDialog {
  sentenceData: SentenceData;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.sentenceData = this.data.sentenceData;
  }

}
