
import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    templateUrl: 'contador.component.html'
})

export class ContadorComponent{
    public title: string = "Contador App";
    public valor: number = 0;
    public base: number = 1;

    // Funcion para incrementar el valor 
    public acumular( valor:number ): void {
        this.valor += valor;
    }

}