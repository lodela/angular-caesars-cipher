import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


import { CiphertextComponent } from './ciphertext/ciphertext.component';
import { ShiftComponent } from './shift/shift.component';
import { ShiftValueService } from './shiftvalue.service';
import { PlaintextComponent } from './plaintext/plaintext.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaintextComponent,
    CiphertextComponent,
    ShiftComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ShiftValueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
