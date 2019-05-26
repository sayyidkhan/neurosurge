import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TripService} from "../../services/trip-service";
import {TripDetailPage} from "../trip-detail/trip-detail";

/**
 * Generated class for the LearningLevel2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-learning-level2',
  templateUrl: 'learning-level2.html',
})
export class LearningLevel2Page {

  public trips: any;

  constructor(public nav: NavController, public navParams: NavParams,public tripService: TripService) {
    this.trips = tripService.getAll().filter(x => x['id'] >= 6 && x['id'] <= 11); // change the range here
    console.log(this.trips);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LearningLevel2Page');
  }

  viewDetail(id) {
    this.nav.push(TripDetailPage, {id: id});
  }

}
