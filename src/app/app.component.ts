import { Component } from '@angular/core';

// El decorador Component necesita de un parametro
@Component({
  // Necesita el selector (donde se carga la información )
  selector: 'app-root',
  // Template(hay 2, en este caso, se especifica la ruta del template)
  templateUrl: 'app.component.html'
})

export class AppComponent {
  public title: string  = 'Acumulador App';
  public numero: number = 0;
  public base: number = 10; 

  public acumular(valor: number): void {
    this.numero += valor; 
  }

}
