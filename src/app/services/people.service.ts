import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../model/Person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http:HttpClient) { }

  loadPeople() : Observable <Person[]>{

    return this.http.get<Person[]>('https://localhost:5000/api/values');
  }

  createPerson(person:Person) : Observable <Person[]>{

    return this.http.post<Person[]>('https://localhost:5000/api/values',person);
  }

  deletePerson(id:number){
    return this.http.delete('https://localhost:5000/api/values/'+id);
  }
}
