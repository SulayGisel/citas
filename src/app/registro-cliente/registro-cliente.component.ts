import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
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
    console.log(this.cliente);
  }

constructor(){

}

ngOnInit(): void {
  
}
  
}
