import Bow from './Bow';
import Inventory from './Inventory';
import Pizza from './Pizza';
import Sword from './Sword';

const myInventory: Inventory = new Inventory();
function pickPizza(amountOfSlices: number, isSpolied: boolean) {
  return new Pizza(amountOfSlices, isSpolied);
}

function pickSword(
  baseDamage: number,
  baseDurability: number,
  value: number,
  weight: number
) {
  return new Sword(baseDamage, baseDurability, value, weight);
}

function pickBow(
  baseDamage: number,
  baseDurability: number,
  value: number,
  weight: number
) {
  return new Bow(baseDamage, baseDurability, value, weight);
}

/**
 * - Inventory
 *   - Pizza * 5 - good
 *   - Pizza * 3 - spoiled
 *   - Sword * 2
 *   - Bow * 1
 */
function main() {
  //Game Start
  myInventory.addItem(pickPizza(5, false));
  myInventory.addItem(pickPizza(3, true));
  myInventory.addItem(pickSword(100, 80, 1000, 15));
  myInventory.addItem(pickSword(150, 120, 1200, 18));
  myInventory.addItem(pickBow(300, 1500, 800, 5));

  //console.log(myInventory);

  //I eat 5 pieces of good pizza
  console.log((myInventory.items[0] as Pizza).use());
  //I eat 3 pieces of spolied pizza.
  console.log((myInventory.items[1] as Pizza).use());
  //I eat 3 pieces of spolied pizza again.
  console.log((myInventory.items[1] as Pizza).use());

  //I use sword1 
}

main();
