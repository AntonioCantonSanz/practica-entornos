import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-entorno',
  styleUrl: './entorno.css',
  templateUrl: './entorno.html',
})
export class Entorno {
  // Datos del entorno: cada rama (main, qa-pending, uat-pending) tiene su propia versión.
  protected readonly codigo = 'PROD';
  protected readonly mensaje = 'Entorno de producción';
  protected readonly color = '#16a34a';
}
