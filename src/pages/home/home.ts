import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public coachTeamName = "Bob";
  public teamScore = "1";
  public oppScore = "2";
  public oppTeamName = "Steven";
  public periodUI = "1";
  public gameClockUI = "3:45";
  

  constructor(public navCtrl: NavController) {

  }

  showOptionsPopover() {
    alert("Clicked on options popover!");
  }

  testing() {
    alert("Clicked on options popover!");
  }

}
