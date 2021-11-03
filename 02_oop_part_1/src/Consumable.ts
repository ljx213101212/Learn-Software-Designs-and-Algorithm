import { Item } from './Item';

/**
 * The Consumable class describes those items that can be eaten by the player.
 * Consumables can be marked as consumed, and can be spoiled.
 * These properties are stored in the instance variables consumed and spoiled, respectively.
 * A newly-created Consumable object should have its consumed field set to false.
 */
export default class Consumable extends Item {
  spoiled: boolean;
  consumed: boolean;

  public getSpoiled(): boolean {
    return this.spoiled;
  }

  public setSpoiled(spoiled: boolean): void {
    this.spoiled = spoiled;
  }

  public getConsumed(): boolean {
    return this.consumed;
  }

  public setConsumed(consumed: boolean): void {
    this.consumed = consumed;
  }

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);
    this.name = name;
    this.spoiled = spoiled;
    this.consumed = false;
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
    if (this.consumed) {
      return `There is nothing left of the ${this.name} to consume.`;
    }
    return this.eat();
  }

  eat(): string {
    const extraMessage = this.spoiled ? '\nYou feel sick.' : '';
    this.consumed = true;
    return `You eat the ${this.name}.${extraMessage}`;
  }
}
