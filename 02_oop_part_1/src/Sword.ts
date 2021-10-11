import Weapon from './Weapon';
/**
 *All instances of the Sword class have the name “sword”.
 */
export default class Sword extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super('sword', baseDamage, baseDurability, value, weight);
    this.name = 'sword';
  }

  /**
   * Sword.polish(): This method increases the instance’s damageModifier by adding Weapon's
   * MODIFIER_CHANGE_RATE each time polish() is called, up to 25% of the baseDamage value.
   * If the base damage of a sword were to be 100,
   * then the maximum that the effective damage could be increased to would be 125.
   */
  polish(): void {
    const maxDamage = this.baseDamage * 0.25;
    const polishedDamageModifier =
      this.damageModifier + Weapon.MODIFIER_CHANGE_RATE;
    this.damageModifier =
      polishedDamageModifier >= maxDamage ? maxDamage : polishedDamageModifier;
  }
}
