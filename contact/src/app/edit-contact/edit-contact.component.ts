import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  id: number;
  data:object = {};
  users = [];
  exist: boolean = false;
  userObj:object = {};
  private headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  editContact = function(user) {
    this.userObj = {
      "name": user.name,
      "emailid": user.emailid, 
      "phone": user.phone,
      "city": user.city,
      "state": user.state,
      "country": user.country
    }
    this.http.post("http://localhost:5555/users", this.userObj).subscribe((res: any) => {
      this.isAdded = true;
      this.router.navigate(["/"]);
    })
 }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.http.get("http://localhost:5555/users").subscribe(
      (res: any[]) => {
        this.users = res;
        for(let i=0; i < this.users.length; i++){
          if(parseInt(this.users[i].id) === this.id) {
            this.exist = true;
            this.data = this.users[i];
            break;
          } else {
            this.exist = false;
          }
        }
      }
    )
  }

}
