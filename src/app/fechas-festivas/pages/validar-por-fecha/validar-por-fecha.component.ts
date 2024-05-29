import { Component } from '@angular/core';
import { FestivosService } from '../../services/festivos.service';

@Component({
  selector: 'app-validar-por-fecha',
  templateUrl: './validar-por-fecha.component.html',
  styleUrl: './validar-por-fecha.component.css',
})
export class ValidarPorFechaComponent {

  public sidenavItems = [
    { label: 'Validar por fecha', route: '/festivos/validar-por-fecha' },
    { label: 'Validar por año', route: '/festivos/validar-por-anho' },
  ];

  date: any;

  public esFestivo: string = '';

  public anho: number = 2020;

  public mes: number = 1;

  public dia: number = 1;

  mostrarDiv: boolean = false;

  constructor(private festivosService: FestivosService) {}

  toggleDiv() {
    this.mostrarDiv = true;
  }

  restoreValues() {
    this.date = '';
  }

  validarFestivoPorFecha() {
    console.log('validarFestivoPorFecha');

    let dateObject = new Date(this.date);
    let year = dateObject.getFullYear();
    let month = dateObject.getMonth() + 1;
    let day = dateObject.getDate();

    if (!year || !month || !day) {
      this.esFestivo = 'Fecha no válida';
      this.mostrarDiv = true;
      return;
    }

    this.festivosService.getFestivosPorFecha(year, month, day).subscribe({
      next: (resp) => {
        if (resp) {
          this.esFestivo = 'Es festivo';
          this.restoreValues();
        } else {
          this.esFestivo = 'No es festivo';
          this.restoreValues();
        }
        this.mostrarDiv = true;
      },
      error: (response) => {
        this.esFestivo = response.error;
        this.mostrarDiv = true;
        console.error('Algo Salió mal!', response);
        this.restoreValues();
      },
    });
  }
}
