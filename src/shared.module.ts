import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { MaterialModule } from './app/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    FlexLayoutModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    FlexLayoutModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ]
})
export class SharedModule { }

