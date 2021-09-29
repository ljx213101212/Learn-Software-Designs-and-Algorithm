import { Point } from './Point';
import { Color, FillStatus, Shape } from './Shape';

export enum TriangleType {
  EQUILATERAL = 'equilateral triangle',
  ISOSCELES = 'isosceles triangle',
  SCALENE = 'scalene triangle',
}
/**
 * 3. Create class `Triangle` that takes 3 points as it's vertices. Triangle must inherit
   `Shape` abstract class. `Triangle` should contain:

    - a constructor (use multiple constructors declaration for Typescript) which creates
      `Triangle` class using three instances of `Point` class, may also provide color and
      filled properties;
    - override `toString()` method, it should return a `Triangle` class stringified
      representation in format `"Triangle[v1=(x1, y1),v2=(x2, y2),v3=(x3, y3)]"`;
    - override `getType()` method, which prints `"equilateral triangle"` if all the three
      sides are equal, `"isosceles triangle"` if any two of the three sides are equal, or
      `"scalene triangle"` if all sides are different.
 */
export class Triangle extends Shape {
  point1: Point;
  point2: Point;
  point3: Point;
  filled: boolean;
  color: string;

  private getTrianglePointsDef(): string {
    let pointsDef = '';
    pointsDef += `v1=${this.point1.toString()},`;
    pointsDef += `v2=${this.point2.toString()},`;
    pointsDef += `v3=${this.point3.toString()}`;
    return pointsDef;
  }

  private isEquilateral(): boolean {
    const side1 = this.point1.distance(this.point2);
    const side2 = this.point2.distance(this.point3);
    const side3 = this.point3.distance(this.point1);
    return side1.toFixed(1) === side2.toFixed(1) && side2.toFixed(1) === side3.toFixed(1);
  }

  private isIsosceles(): boolean {
    const side1 = this.point1.distance(this.point2);
    const side2 = this.point2.distance(this.point3);
    const side3 = this.point3.distance(this.point1);
    return side1.toFixed(1) === side2.toFixed(1) || side2.toFixed(1) === side3.toFixed(1) || side3.toFixed(1) === side1.toFixed(1);
  }

  getType(): string {
    if (this.isEquilateral()) {
      return TriangleType.EQUILATERAL;
    }
    if (this.isIsosceles()) {
      return TriangleType.ISOSCELES;
    }
    return TriangleType.SCALENE;
  }

  constructor(point1: Point, point2: Point, point3: Point);
  constructor(
    point1: Point,
    point2: Point,
    point3: Point,
    filled?: boolean,
    color?: string
  ) {
    super([point1, point2, point3]);
    this.point1 = point1;
    this.point2 = point2;
    this.point3 = point3;
    this.filled = filled ?? true;
    this.color = color ?? Color.GREEN;
  }

  toString() {
    return `Triangle[${this.getTrianglePointsDef()}]`;
  }
}
