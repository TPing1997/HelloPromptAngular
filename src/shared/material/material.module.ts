import { NgModule } from '@angular/core';
import {
  MatButtonModule,


  MatCardModule,






  MatCheckboxModule, MatFormFieldModule, MatIconModule,



  MatInputModule, MatMenuModule,







  MatSelectModule, MatSidenavModule,



  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule
  ], providers: []
})
export class MaterialModule { }
