import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

    nombre:string = 'Thor';
    edad:number = 32;

    obtenerNombre(): string {
        return this.nombre;
    }

    obtenerEdad(): string {
        return this.edad.toString();
    }

    get nombreMayuscula(): string{
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void {
        this.nombre = "Spiderman";
    }

    cambiarEdad(): void {
        this.edad = 20;
    }
}