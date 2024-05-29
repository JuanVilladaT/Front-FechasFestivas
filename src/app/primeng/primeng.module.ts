import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [
    FormsModule,
    CalendarModule,
    FloatLabelModule,
    ButtonModule,
    TableModule,
    CommonModule,
  ],
})
export class PrimengModule {}
