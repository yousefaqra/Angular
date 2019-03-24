import { Component, OnInit } from '@angular/core';
import { Person } from './model/Person';
import { PEOPLE } from 'src/db';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeopleService } from './services/people.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  people$ :Observable<Person[]>;


  constructor(private peopleService:PeopleService) {
    
  }

  ngOnInit(){
    this.people$ = this.peopleService.loadPeople();
  }

  onPeopleFormSubmit(){

  }


}
