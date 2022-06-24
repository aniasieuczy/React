import foods from "./foods";
import { choice, remove } from "./helpers";

// const {...fruits} = fruits;

let randomFruit = choice(foods);
console.log(`I would like a ${randomFruit}, please` );
console.log(`Here you go: ${randomFruit}`);
console.log("Delicious! May I have another?");
let remaining = remove(foods, randomFruit);
console.log(`I am sorry, we're all out.We have: ${remaining.length} other foods left`);
