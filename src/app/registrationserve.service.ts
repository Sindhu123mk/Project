import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from './registration';
@Injectable({
  providedIn: 'root'
})
export class RegistrationserveService {
  private basepath=''
  formdata:Registration = new Registration ();
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
  postData(formdata :Registration){
    let obj:Registration = new Registration();
    
    obj.firstname=formdata.firstname;
    obj.lastname = formdata.lastname;
    obj.email=formdata.email;
    obj.phone=formdata.phone;
   
   
    alert(obj.email);
    return this.http.post(this.basepath,obj).subscribe(data => {
      console.log(data);
      alert("Done");
    });
}

}
