import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  pageTitle: string = 'Star Wars API Access';
  subTitleMessage: string = 'This is my subtitle';
  showSubTitle: boolean = false;

  onBtnClick(): void {
    this.showSubTitle = !this.showSubTitle;
  }
}
