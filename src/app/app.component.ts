import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app-routing';

  constructor(
    private _spinner: NgxSpinnerService
  ){

    // this._spinner.show();

    // setTimeout(()=>{
    //   this._spinner.hide()
    // },5000);
  }


}
