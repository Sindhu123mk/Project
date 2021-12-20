import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';
@Injectable({
  providedIn: 'root'
})
export class LoginserveService {
  private basepath='http://localhost:37833/api/Users'
  formdata: Login = new Login();
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
  postData(formdata :Login){
    let obj:Login = new Login();
   
    obj.email = formdata.email;
    obj.password=formdata.password;
   
    alert(obj.email);
    return this.http.post(this.basepath,obj).subscribe(data => {
      console.log(data);
      alert("Done");
    });
}
}
