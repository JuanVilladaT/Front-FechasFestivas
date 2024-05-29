import { Component, OnInit } from '@angular/core';
import { FestivoPorAnho } from '../../interfaces/festivo-anho.interface';
import { FestivosService } from '../../services/festivos.service';

@Component({
  selector: 'app-validar-por-anho',
  templateUrl: './validar-por-anho.component.html',
  styleUrl: './validar-por-anho.component.css',
  
})
export class ValidarPorAnhoComponent {

  public sidenavItems = [
    { label: 'Validar por fecha', route: '/festivos/validar-por-fecha' },
    { label: 'Validar por año', route: '/festivos/validar-por-anho' },
  ];

  public festivos: FestivoPorAnho[] = [];

  date: any;
  esFestivo: string = '';
  mostrarDiv: boolean = false;

  constructor(private festivosService: FestivosService) {}

  toggleDiv() {
    this.mostrarDiv = true;
  }

  restoreValues() {
    this.date = '';
  }

  validarFestivo() {
    console.log('validarFestivo');
    let dateObject = new Date(this.date);
    let year = dateObject.getFullYear();
    if (!year) {
      console.error('Fecha no válida');
      this.esFestivo = 'Fecha no válida';
      this.mostrarDiv = false;
      this.restoreValues();
      return;
    }
    this.festivosService.getFestivosPorAnho(year).subscribe({
      next: (festivos) => {
        this.festivos = festivos;
        this.esFestivo = '';
        this.mostrarDiv = true;
        this.restoreValues();
      },
      error: (response) => {
        this.esFestivo = response.error;
        console.error('Somthing went wrong:', response);
        this.mostrarDiv = false;
        this.restoreValues();
      },
    });
  }
}
