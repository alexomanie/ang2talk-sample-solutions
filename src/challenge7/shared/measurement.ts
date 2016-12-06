export class Measurement {
  constructor(public value: number, public timestamp: Date) {

  }
}

export enum MeasurementType {
  Temperature = <any>'temperature',
  Temperatures = <any>'temperatures',
  Humidity = <any>'humidity',
  Humidities = <any>'humidities'
}
