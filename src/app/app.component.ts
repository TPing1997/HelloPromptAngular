import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import en from './../assets/i18n/en.json';
import ch from './../assets/i18n/ch.json';
import { Constants } from 'src/assets/constant/constant';
import { HttpClient } from '@angular/common/http';
import { SentenceDialog } from 'src/shared/component/sentence-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  greetingsForm: any;
  sentenceModel: Observable<SentenceData[]>;
  currentLanguage: string;
  constructor(private translate: TranslateService, private http: HttpClient, public dialog: MatDialog) {
    // ngx translate

    this.currentLanguage = 'en';
    translate.setDefaultLang(this.currentLanguage);



    // form section
    this.greetingsForm = new FormGroup({
      initialWord: new FormControl('', Validators.required),
      comma: new FormControl(false),
      name: new FormControl('', Validators.required),
      finalLetter: new FormControl('', Validators.required)
    });
  }



  initialWords: InitialWord[] = [
    { value: 'hi', viewValue: 'hi' },
    { value: 'hello', viewValue: 'hello' }
  ];
  finalLetters: FinalLetter[] = [
    { value: 'exclamationMark', viewValue: 'exclamationMark' },
    { value: 'fullStop', viewValue: 'fullStop' },
    { value: 'questionMark', viewValue: 'questionMark' }
  ];
  onSubmit(sentenceData: SentenceData) {
    if (this.greetingsForm.valid) {
      console.log(sentenceData)
      this.http.post(Constants.WS_SAVE_SENTENCE,  sentenceData ).subscribe(
        res => console.log(res)
      );
      this.openDialog(sentenceData);
    }

  }
  openDialog(sentenceData: SentenceData) {
    this.dialog.open(SentenceDialog, {
      data: {
        sentenceData
      }
    });
  }
  translateLanguage(languageType: string) {
    this.currentLanguage = languageType;
    this.translate.use(languageType);
  }
}


