import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from './payment';
@Injectable({
  providedIn: 'root'
})
export class PaymentserveService {
  private basepath=''
  formdata:Payment = new Payment();
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
  postData(formdata :Payment){
    let obj:Payment = new Payment();
    
    obj.Payment_Id=formdata.Payment_Id;
    obj.Mode = formdata.Mode;
    obj.Amount=formdata.Amount;
    obj.cardname=formdata.cardname;
    obj.credit=formdata.credit;
    obj.cvv=formdata.cvv;
    obj.month=formdata.month;
    obj.ExpYear=formdata.ExpYear;
   
   
    alert(obj.Payment_Id);
    return this.http.post(this.basepath,obj).subscribe(data => {
      console.log(data);
      alert("Done");
    });
}



}
