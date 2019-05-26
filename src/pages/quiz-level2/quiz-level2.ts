import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QuizQns} from "../../services/trip-quizqns";
import {TripService} from "../../services/trip-service";
import {TripDetailPage} from "../trip-detail/trip-detail";

/**
 * Generated class for the QuizLevel2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz-level2',
  templateUrl: 'quiz-level2.html',
})
export class QuizLevel2Page {

  public trips: any;
  public inputName: string;
  public state;

  constructor(public nav: NavController, public navParams: NavParams,public tripService: TripService) {
    this.trips = tripService.getAll().filter(x => x['id'] >= 6 && x['id'] <= 11); // change the range here
    console.log(this.trips);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizLevel2Page');
  }

  validateQuiz(textFieldAns,databaseAns){
    if(textFieldAns.toLowerCase() == databaseAns.toLowerCase()){
      console.log(true);
      this.state = true;
    }
    else{
      console.log(false);
      this.state = false;
    }
    console.log("textfieldAns:" + textFieldAns);
    console.log("databaseAns:" + databaseAns);
  }

}
