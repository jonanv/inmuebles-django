import { Pipe, PipeTransform } from '@angular/core';

const FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
const FILE_SIZE_UNITS_LONG = ['bytes', 'Kilobytes', 'Megabytes', 'Gigabytes', 'Terabytes', 'Petabytes', 'Exabytes', 'Zettabytes', 'Yottabytes'];


@Pipe({
  name: 'fileSize',
  standalone: false,
})
export class FileSizePipe implements PipeTransform {
  transform(sizeInBytes: number, longForm?: boolean): string {
    const units = longForm
      ? FILE_SIZE_UNITS_LONG
      : FILE_SIZE_UNITS;

    let power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
    power = Math.min(power, units.length - 1); // Asegura que no exceda el número de unidades disponibles

    const size = sizeInBytes / Math.pow(1024, power);
    const formattedSize = Math.round(size * 100) / 100; // Redondea a 2 decimales
    const unit = units[power];

    return size
      ? `${ formattedSize } ${ unit }`
      : '0';
  }
}
