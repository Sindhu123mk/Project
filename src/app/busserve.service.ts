import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bus } from './bus';
@Injectable({
  providedIn: 'root'
})
export class BusserveService {
  private basepath=''
  formdata:Bus = new Bus();
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
  postData(formdata : Bus){
    let obj:Bus = new Bus();
   
    obj.Bus_Id = formdata.Bus_Id;
    obj.Bus_Name=formdata.Bus_Name;
    obj.Source=formdata.Source;
    obj.Destination=formdata.Destination;
    obj.Arrival_time=formdata.Arrival_time;
    obj.Departure_time=formdata.Departure_time;
    alert(obj.Bus_Id);
    return this.http.post(this.basepath,obj).subscribe(data => {
      console.log(data);
      alert("Done");
    });
}

}
