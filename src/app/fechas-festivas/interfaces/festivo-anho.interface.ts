export interface FestivoPorAnho {
  id: number;
  nombre: string;
  dia: number;
  mes: number;
  diasPascua: number;
  idTipo: number;
  tipo: Tipo;
}

export interface Tipo {
  id: number;
  nombre: Nombre;
}

export enum Nombre {
  BasadoEnPascua = 'Basado en Pascua',
  BasadoEnPascuaYLeyPuenteFestivo = 'Basado en Pascua y Ley Puente Festivo',
  Fijo = 'Fijo',
  LeyPuenteFestivo = 'Ley Puente Festivo',
}
