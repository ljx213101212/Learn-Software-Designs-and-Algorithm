import Shipment, { ShipmentType } from './Shipment';


const LetterType = <T extends { new (...args: any[]): {} }>(
    constructor: T
  ) => {
    return class extends constructor {
        type = ShipmentType.LETTER;
        minWeight = 0;
        maxWeight = 15;
    };
  };
// const weightCheck =
//   (weight: number) =>
//   (_target: Object, _propertyKey: string, descriptor: PropertyDescriptor) => {
//     const originalMethod = descriptor.value;

//     descriptor.value = function (...args) {
//       const start = performance.now();
//       let result;
//       if (this.minWeight > weight || this.maxWeight < weight) {
//         console.error('It is not a letter');
//       } else {
//         result = originalMethod.apply(this, args);
//       }

//       const finish = performance.now();
//       console.log(`Execution time: ${finish - start} milliseconds`);
//       return result;
//     };

//     return descriptor;
//   };
@LetterType
export default class Letter extends Shipment {
  [x: string]: any;

  constructor(
    toAddress: string,
    fromAddress: string,
    toZipCode: string,
    fromZipCode: string,
    weight: number,
    marks?: string[]
  ) {
    super(
      toAddress,
      fromAddress,
      toZipCode,
      fromZipCode,
      weight,
      marks
    );

    if (this.minWeight >= weight || this.maxWeight < weight) {
      throw new Error(`It is not a letter ${this.type}`);
    }
  }
}
