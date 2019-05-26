import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {TripDetailPage} from "../trip-detail/trip-detail";

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {
  // list of trips
  public trips: any;

  public storeData;

  constructor(public nav: NavController, public tripService: TripService) {
    // this.storeData = tripService.getAll().filter(x => x['id'] >= 1 && x['id'] <= 4); // filter through the list
    //
    this.trips = tripService.getAll().filter(x => x['id'] >= 1 && x['id'] <= 5); // change the range here
    console.log(this.trips);
    
    // set sample data
    // this.trips = tripService.getAll();
  }

  // view trip detail
  viewDetail(id) {
    this.nav.push(TripDetailPage, {id: id});
  }
}
