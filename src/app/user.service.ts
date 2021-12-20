import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private basepath='http://localhost:11505/api/Users'
  formdata:User = new User ();
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers :new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  public getData(): Observable<any>
  {
    alert("get service called");
    return this.http.get(this.basepath);
  }
  postData(formdata : User){
    let obj:User = new User ();
    obj.User_Id=formdata.User_Id;
    obj.UserName = formdata.UserName;
    obj.PhoneNumber=formdata.PhoneNumber;
    obj.Email_Id=formdata.Email_Id;
    obj.Gender=formdata.Gender;
    obj.Password=formdata.Password;
    alert(obj.User_Id);
    return this.http.post(this.basepath,obj).subscribe(data => {
      console.log(data);
      alert("Done");
    });
}
}
