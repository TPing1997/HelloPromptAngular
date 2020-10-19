import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MaterialModule } from 'src/shared/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SentenceDialog } from 'src/shared/component/sentence-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    SentenceDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [{
    provide: MatDialogRef
  }
  ],
  bootstrap: [AppComponent],
  exports: [SentenceDialog],
  entryComponents: [SentenceDialog]
})
export class AppModule {

}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
