import Weapon from './Weapon';
/**
 * All instances of the Bow class have the name “bow”.
 */
export default class Bow extends Weapon {
  constructor(value: number, weight: number, modifierChangeRate: number) {
    super('', value, weight, Weapon.MODIFIER_CHANGE_RATE);
    this.name = (typeof Bow).toLowerCase();
    this.modifierChangeRate = modifierChangeRate;
  }

  /**
    Bow.polish(): This method increases the instance’s durabilityModifier by adding Weapon.MODIFIER_CHANGE_RATE. 
    Any changes are capped such that effective durability is no larger than one (1).
   */
  polish(): void {
    const polishedDurability =
      this.getDurability() + Weapon.MODIFIER_CHANGE_RATE;
    this.durabilityModifier = polishedDurability >= 1 ? 1 : polishedDurability;
  }
}
