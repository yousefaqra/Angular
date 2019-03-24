import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../model/Person';
import { PeopleService } from '../services/people.service';


@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {


  @Input()
  person:Person;

  @Output('personDelete')
  personEmitter =  new EventEmitter<Person>();

  constructor(private peopleService:PeopleService) { }

  ngOnInit() {
  }

  deletePerson(id:number){
    this.peopleService.deletePerson(id).subscribe(q => console.log("deleted"));
  }

}
