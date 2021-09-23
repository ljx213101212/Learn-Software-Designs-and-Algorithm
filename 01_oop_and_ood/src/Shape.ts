import { Point } from './Point';

enum Color {
  GREEN = 'green',
  RED = 'red',
}
enum FillStatus {
  FILLED = 'filled',
  NOT_FILLED = 'Not filled',
}
const AT_LEAST_3_POINTS_EXCEPTION =
  'the `Shape` should have at least 3 points!';
/**
 * 2. Create abstract superclass called `Shape`, which contains:
    - two protected instance variables: `color` (string), `filled`
      (boolean) and `points` (Point[]);
    - overloaded constructor (use multiple constructors declaration for Typescript): a
      constructor that takes a list of `points` and initializes the color to `"green"`
      and filled to `true` by default, and a constructor that takes a list of `points`,
      the `color` and `filled` properties;
    - Make sure that the `Shape` has at least 3 points (2 points is just a line).
    - `toString()` method that returns `"A Shape with color of xxx and filled/Not
     filled. Points: (x1, y1), (x2, y2)..."`;
    - `getPerimeter()` that calculates the perimeter using `Point.distance` method;
 */
export abstract class Shape {
  abstract getType(): string;

  color: string;
  filled: boolean;
  points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], filled?: boolean, color?: string) {
    if (points.length < 3) {
      throw AT_LEAST_3_POINTS_EXCEPTION;
    }
    this.points = points;
    this.filled = filled ?? true;
    this.color = color ?? Color.GREEN;
  }

  private getColorDef(): string {
    return this.color;
  }

  private getFilledDef(): string {
    return this.filled ? FillStatus.FILLED : FillStatus.NOT_FILLED;
  }

  private getCombinedPointsDef(): string {
    let pointsDef = 'Points: ';
    this.points.forEach((point) => {
      pointsDef += point.toString();
      pointsDef += ', ';
    });
    return pointsDef.slice(0, -2);
  }

  toString(): string {
    return `A Shape with color of ${this.getColorDef()} and ${this.getFilledDef()}. ${this.getCombinedPointsDef()}`;
  }

  getPerimeter(): number {
    let perimeter = 0;
    for (let i = 1; i < this.points.length; i++) {
      perimeter += this.points[i].distance(this.points[i - 1]);
    }
    perimeter += this.points[this.points.length - 1].distance(this.points[0]);
    return perimeter;
  }
}
