import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

    titulo: string = 'Contador App';
    numero: number =  0;
    base: number = 5;
    mensaje: string = "";

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.mensaje = "";      
    }
  
    gestionContador(incremento:number){
      if (this.numero == 0 && incremento == -5){
        this.mensaje = "Valor limite excedido";
      }
      else{
        this.numero += incremento;
      }
    }    

}