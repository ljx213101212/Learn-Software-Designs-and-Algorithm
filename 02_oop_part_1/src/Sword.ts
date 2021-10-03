import Weapon from './Weapon';
/**
 *All instances of the Sword class have the name “sword”.
 */
export default class Sword extends Weapon {
  constructor(value: number, weight: number, modifierChangeRate: number) {
    super('', value, weight, Weapon.MODIFIER_CHANGE_RATE);
    this.name = (typeof Sword).toLowerCase();
    this.modifierChangeRate = modifierChangeRate;
  }

  /**
   * Sword.polish(): This method increases the instance’s damageModifier by adding Weapon's
   * MODIFIER_CHANGE_RATE each time polish() is called, up to 25% of the baseDamage value.
   * If the base damage of a sword were to be 100,
   * then the maximum that the effective damage could be increased to would be 125.
   */
  polish(): void {
    const maxDamage = this.baseDamage * 0.25;
    const polishedDamage = this.damageModifier + Weapon.MODIFIER_CHANGE_RATE;
    this.damageModifier =
      polishedDamage >= maxDamage ? maxDamage : polishedDamage;
  }
}
