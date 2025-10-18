/* Challenge

You're helping a pet shop create a system to determine if they can sell a pet to a customer.

initialize the following variables:

has_license with the value true
has_space with the value false
has_experience with the value true
Write the following logical expressions to determine if:

can_sell_regular_pet: Customer needs EITHER a license OR experience, AND must have space
can_sell_exotic_pet: Customer needs BOTH a license AND experience, AND must have space
cannot_sell_any_pet: Customer has NO license AND NO experience, OR has NO space */

// Initialize variables
let has_license = true;
let has_space = false;
let has_experience = true;

// Calculate conditions
let can_sell_regular_pet = (has_license || has_experience) && has_space;
let can_sell_exotic_pet = has_license && has_experience && has_space;
let cannot_sell_any_pet = (!has_license && !has_experience) || !has_space;

// Don't delete the lines below
console.log('Can sell regular pet:', can_sell_regular_pet);
console.log('Can sell exotic pet:', can_sell_exotic_pet);
console.log('Cannot sell any pet:', cannot_sell_any_pet);
