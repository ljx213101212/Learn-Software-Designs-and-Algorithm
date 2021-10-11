import Weapon from './Weapon';
/**
 * All instances of the Bow class have the name “bow”.
 */
export default class Bow extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super('bow', baseDamage, baseDurability, value, weight);
    this.name = 'bow';
  }

  /**
    Bow.polish(): This method increases the instance’s durabilityModifier by adding Weapon.MODIFIER_CHANGE_RATE. 
    Any changes are capped such that effective durability is no larger than one (1).
   */
  polish(): void {
    const polishedDurability =
      this.baseDurability + Weapon.MODIFIER_CHANGE_RATE;
    this.durabilityModifier = polishedDurability >= 1 ? 1 : polishedDurability;
  }
}
