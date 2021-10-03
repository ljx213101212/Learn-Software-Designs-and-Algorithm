import { Item } from './Item';

/**
 * The Consumable class describes those items that can be eaten by the player.
 * Consumables can be marked as consumed, and can be spoiled.
 * These properties are stored in the instance variables consumed and spoiled, respectively.
 * A newly-created Consumable object should have its consumed field set to false.
 */
export default class Consumable extends Item {

  private _spolied: boolean;
  public get isSpolied(): boolean {
    return this._spolied;
  }
  public set isSpolied(value: boolean) {
    this._spolied = value;
  }
  private _consumed: boolean;
  public get isConsumed(): boolean {
    return this._consumed;
  }
  public set isConsumed(value: boolean) {
    this._consumed = value;
  }

  constructor(name: string, value: number, weight: number, isSpolied: boolean) {
    super(name, value, weight);
    this.name = name;
    this.isSpolied = isSpolied;
    this.isConsumed = false;
  }
  /**
   * Consumable.use(): If a Consumable is not spoiled and is not consumed,
   * calling this simply returns the value from a call to Consumable.eat().
   * For a Consumable with the name of “bread” that has already been consumed, this method returns the following:
   * @returns There is nothing left of the bread to consume.
   * Assuming for this Consumable named “bread” that the value returned by a call to its eat() method is the following:
   * @returns "You eat the bread."
   * If this “bread” were to be spoiled,
   * the method returns this String, appended with a newline and the text “You feel sick.”:
   * ”You eat the bread. You feel sick.”
   */
  use(): string {
    if (this.isConsumed) {
      return `There is nothing left of the ${this.name} to consume.`;
    }
    return this.eat();
  }

  eat(): string {
    const extraMessage = this.isSpolied ? '\n You feel sick.' : '';
    this.isConsumed = true;
    return `You eat the ${this.name}.${extraMessage}`;
  }
}
