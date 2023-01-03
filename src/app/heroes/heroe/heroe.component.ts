import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    public nombre: string = 'ironman';
    public edad  : number = 35;

    
    public get nombreCapitalizado() : string {
        return this.nombre.toUpperCase();
    }
    
    public obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }

    public cambiarNombre(): void {
        const listaHeroes: string[] = ["Ironman", "Deadpool", "Spiderman", 'Wolvorine', 'Superman']
        const heroeSelect: number = Math.floor(Math.random() * listaHeroes.length);
        this.nombre = listaHeroes[heroeSelect];
    }

    public cambiarEdad(): void {
        this.edad = 30;
    }
}