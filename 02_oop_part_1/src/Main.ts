import Bow from './Bow';
import Inventory from './Inventory';
import { Item } from './Item';
import Pizza from './Pizza';
import Sword from './Sword';

const myInventory: Inventory = new Inventory();
function pickPizza(amountOfSlices: number, spoiled: boolean) {
  return new Pizza(amountOfSlices, spoiled);
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
 *   - Bow * 2
 */
function main() {
  //Game Start
  myInventory.addItem(pickPizza(5, false));
  myInventory.addItem(pickPizza(3, true));
  myInventory.addItem(pickSword(100, 15, 1000, 15));
  myInventory.addItem(pickSword(150, 120, 1200, 18));
  myInventory.addItem(pickBow(300, 1500, 800, 5));
  myInventory.addItem(pickBow(400, 1500, 1200, 8));

  sampleBluePrint();
  sampleBluePrintResultOnly();
}

function sampleBluePrint() {
  console.log('The game will begin like this');
  console.log('I eat 5 pieces of good pizza');
  console.log('I eat 3 pieces of spolied pizza.');
  console.log('I use sword1 until it broken.');
  console.log('I use sword1 again after it broken.');
  console.log('I compare the value between sword1 and bow1 (expect 1)');
  console.log(
    'I compare the value between sword2 and bow2 (value is same) (expect 1)'
  );
  console.log('\n');
}

function sampleBluePrintResultOnly() {
  //I eat 5 pieces of good pizza
  console.log((myInventory.items[0] as Pizza).use());
  //I eat 3 pieces of spolied pizza.
  console.log((myInventory.items[1] as Pizza).use());
  //I eat 3 pieces of spolied pizza again.
  console.log((myInventory.items[1] as Pizza).use());

  //I use sword1 until it broken.
  while ((myInventory.items[2] as Sword).getDurability() > 0) {
    console.log((myInventory.items[2] as Sword).use());
  }
  //I use sword1 again after it broken.
  console.log((myInventory.items[2] as Sword).use());
  //I compare the value between sword1 and bow1 (expect 1)
  console.log(
    (myInventory.items[2] as Sword).compareTo(myInventory.items[4] as Bow)
  );
  //I compare the value between sword2 and bow2 (value is same) (expect 1)
  console.log(
    (myInventory.items[3] as Sword).compareTo(myInventory.items[5] as Bow)
  );

  //Reset item
  Item.reset();
  // Add new bow
  myInventory.addItem(pickBow(500, 1600, 1500, 8));
  console.log((myInventory.items[6] as Bow).id + ' is 0');
  //Inventory.toString()
  console.log(myInventory.toString());
}

main();
