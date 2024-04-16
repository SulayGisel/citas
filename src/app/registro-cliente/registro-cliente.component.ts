import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ArbitroService } from '../services/arbitro.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css'], 
})
export class RegistroClienteComponent implements OnInit {

  cliente ={
    nombre:'',
    apellido:'',
    identificacion:'',
    telefono:'',
    email:'',
    contrasena:''

  };

  guardar(){

    this._arbitroService.post(this.cliente).subscribe(data=>console.log(data))
    

  }

constructor(private _arbitroService: ArbitroService){

}

ngOnInit(): void {
 // this._arbitroService.get().subscribe(data=>console.log(data))
}
  
}
