import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id: number;
  data:object = {};
  users = [];
  exist: boolean = false;
  userObj:object = {};
  private headers = new Headers({ 'Content-Type': 'application/json'});
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }
  confirmationString: string = "New Appointment hase been added";
  isAdded: boolean = false;
  checked: boolean = true;
  appointmentObj:object = {};

  

  addNewUser = function(user) {

     this.userObj = {
       "name": user.name,
       "emailid": user.emailid, 
       "phone": user.phone,
       "city": user.city,
       "state": user.state,
       "country": user.country,
       "isActive": user.forActive
     }
     this.http.post("http://localhost:5555/users", this.userObj).subscribe((res: any) => {
       this.isAdded = true;
     })
  }

  ngOnInit() {
  }

}
