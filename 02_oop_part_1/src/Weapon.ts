import { DISPLAY_PRECISION } from './Constants';
import { Item } from './Item';

export const MODIFIER_CHANGE_RATE = 0.05;
/**
 * The @Weapon class is an abstract implementation of Item and describes items that can deal damage and break from use.
 * The implementation of this class is provided for you.
 * All instances of Weapon have a base damage value @param baseDamage and a modifier to that value @param damageModifier.
 * The sum of these two values determines the effective damage that this Weapon can do on a single use.
 * In addition, Weapons have a base durability value @param baseDurability, and a modifier to that value @param durabilityModifier.
 * The sum of these two values determines the effective durability of the Weapon.
 * When this sum reaches zero or less, the effective durability is zero and the Weapon is considered to be broken and cannot be used.
 */
export default class Weapon extends Item {
  baseDamage: number;
  damageModifier: number;
  baseDurability: number;
  durabilityModifier: number;
  modifierChangeRate: number;

  constructor(
    name: string,
    value: number,
    weight: number,
    modifierChangeRate: number
  ) {
    super(name, value, weight);
    this.modifierChangeRate = modifierChangeRate;
  }

  /**
   * @returns the effective damage of the Weapon.
   */
  getDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  /**
   * @returns the effective durability of the Weapon.
   */
  getDurability(): number {
    return this.baseDurability + this.durabilityModifier;
  }

  /**
   * Weapon.toString(): for a Weapon with
   * the name of “hammer”,
   * a value of 300,
   * a weight of 2.032,
   * a baseDamage value of 30.4219,
   * a damageModifier of 0.05,
   * a baseDurability of 0.7893,
   * a durabilityModifier of 0.05,
   * the method returns a String in the following format:
   * @returns "hammer − Value: 300, Weight : 2.03 , Damage : 30.47 , Durability : 83.93%"
   */
  toString(): string {
    return `${this.name} - Value: ${this.value.toFixed(
      DISPLAY_PRECISION
    )}, Weight : ${this.weight.toFixed(
      DISPLAY_PRECISION
    )} , Damage : ${this.getDamage().toFixed(
      DISPLAY_PRECISION
    )} , Durability : ${this.getDurability().toFixed(DISPLAY_PRECISION)}`;
  }

  /**
   * Weapon.use(): This method returns a String describing what happens when a Weapon is used. 
   * For a Weapon with the name of “hammer”, 
   * and an effective damage of 30.4725, 
   * the method should return the following:
    @returns "You use the hammer , dealing 30.47 points of damage."

    “Using” a Weapon lowers (subtracts) its effective durability by Weapon.MODIFIER CHANGE RATE. 
    If the effective durability of the Weapon hits or drops below 0, 
    the Weapon will ”break”. If the Weapon ”breaks”, 
    the method should output the previous String, 
    but additionally with a newline character and the additional text “The hammer breaks.”:
    @returns "You use the hammer , dealing 34.05 points of damage . The hammer breaks."

    For a Weapon with the name of “hammer”, if it is “broken” (The effective durability is 0 or less), calling its use() method returns the following:
    @returns "You can't use the hammer , it is broken."
    In this case, there is no change to durabilityModifier.
    The Sword class is a concrete implementation of Weapon that you must provide.
   */
  use(): string {
    const currentDurability = this.getDurability();
    if (currentDurability <= 0) {
      return `You can't use the ${this.name} , it is broken`;
    }

    let extraMessage: string = '';
    if (currentDurability <= this.modifierChangeRate) {
      extraMessage = `The ${this.name} breaks`;
    }
    const damageNumber: number = this.getDamage();
    const damageStr: string = this.getDamage().toFixed(DISPLAY_PRECISION);
    //use weapon
    this.durabilityModifier -= this.modifierChangeRate;

    return `You use the hammer, dealing ${damageStr} ${
      damageNumber <= 1 ? 'point' : 'points'
    } of damage`;
  }
}
