import {Injectable} from "@angular/core";
import {QUIZQNS} from "./mock-quizqns";

@Injectable()
export class QuizQns {
  private quizQns: any;

  constructor() {
    this.quizQns = QUIZQNS;
  }

  getAll() {
    return this.quizQns;
  }

  getItem(id) {
    for (var i = 0; i < this.quizQns.length; i++) {
      if (this.quizQns[i].id === parseInt(id)) {
        return this.quizQns[i];
      }
    }
    return null;
  }

  remove(item) {
    this.quizQns.splice(this.quizQns.indexOf(item), 1);
  }
}