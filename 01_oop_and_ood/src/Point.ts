/**
 * 1. Create a `Point` class, which creates 2 dimensional point with coordinates. It
   should contain:
    - two instance variables `x` and `y`;
    - default constructor which creates a point at the location of (0, 0);
    - overloaded constructor (use multiple constructors declaration for Typescript)
      which creates a point by `x` and `y` coordinates;
    - `toString()` method should return a `Point` class stringified representation in
      format: `"(x, y)"`;
    - `distance()` method should be overloaded (use multiple methods declaration for
      Typescript) with next implementations:
      - no args: distance from this point to (0, 0);
      - `distance(other: Point)` - distance from this point to a given instance of
        `Point`;
      - `distance(x, y)` - distance from this point to a given point (x, y).
*/
export class Point {
  x: number;
  y: number;

  public constructor();
  public constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${String(this.x)}, ${String(this.y)})`;
  }
  
  distance(): number;
  distance(other?: Point): number;
  distance(otherOrX?: Point | number, y?: number): number {
      if (typeof otherOrX === undefined) {
        return Math.hypot(this.x, this.y);
      }
      if (typeof otherOrX === "object") {
        return Math.hypot(Math.abs(this.x - otherOrX.x), Math.abs(this.y - otherOrX.y));
      }
      return Math.hypot(Math.abs(this.x - otherOrX), Math.abs(this.y - y ?? 0));
  }
}
