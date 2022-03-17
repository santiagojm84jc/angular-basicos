import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Goku','Vegeta','Trunks','Gohan','Picoro'];
  heroeBorrado: string = "";

  constructor() { 
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('On Init');
  }

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    //this.heroes.pop();
  }

}
