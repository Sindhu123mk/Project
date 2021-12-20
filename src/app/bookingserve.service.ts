import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from './booking';
@Injectable({
  providedIn: 'root'
})
export class BookingserveService {
  private basepath='http://localhost:37833/api/Bookings'
  formdata:Booking = new Booking();
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
  postData(formdata : Booking){
    let obj:Booking = new Booking ();
    obj.Booking_Id=formdata.Booking_Id;
    obj.Bus_Id = formdata.Bus_Id;
    obj.Booking_Date=formdata.Booking_Date;
    obj.Schedule_Id=formdata.Schedule_Id;
    obj.Amount=formdata.Amount;
    obj.Email_Id=formdata.Email_Id;
    alert(obj.Booking_Id);
    return this.http.post(this.basepath,obj).subscribe(data => {
      console.log(data);
      alert("Done");
    });
}
}
