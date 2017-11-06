import { Component } from "@angular/core";

@Component({
    selector: 'page-2',
    templateUrl: './page2.component.html',
    styleUrls: [ './page2.component.css' ],
})

export class Page2 {
    page2Title: string = "This is Star Wars API Access Page 2!";
    subTitleMessage: string = 'This is my subtitle on Page 2';
    showSubTitle: boolean = false;
  
    onBtnClick(): void {
      this.showSubTitle = !this.showSubTitle;
    }
}