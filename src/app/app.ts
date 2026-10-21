import { Component, signal } from '@angular/core';
import { Entorno } from './entorno/entorno';

@Component({
  imports: [Entorno],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Práctica Despliegues');
}
