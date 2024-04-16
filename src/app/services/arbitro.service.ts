import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ArbitroService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get(environment.urlApi)
  }
  getAll(){
    return this.http.get(environment.urlApi)
  }

  post(data:any){
    return this.http.post(environment.urlApi,data)
  }
  


  
  delete(id:any){
    return this.http.delete(`${environment.urlApi}${id}`)
  }
}
