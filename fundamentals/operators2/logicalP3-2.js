/* Challenge

You're helping a driving school create a system to determine if a person can drive different types of vehicles.

Initialize the following variables:

has_license with the value true
has_insurance with the value false
has_experience with the value true
Write the following logical expressions to determine if:

can_drive_car: Person needs EITHER (license AND insurance) OR (license AND experience)
can_drive_motorcycle: Person needs ALL three: license, insurance, AND experience
cannot_drive_any: Person has NO license OR (NO insurance AND NO experience) */

// Initialize variables
let has_license = true;
let has_insurance = false;
let has_experience = true;

// Calculate conditions
let can_drive_car = (has_license && has_insurance) || (has_license && has_experience);
let can_drive_motorcycle = has_license && has_insurance && has_experience;
let cannot_drive_any = !has_license || (!has_insurance && !has_experience);

// Don't delete the lines below
console.log('Can drive car:', can_drive_car);
console.log('Can drive motorcycle:', can_drive_motorcycle);
console.log('Cannot drive any:', cannot_drive_any);
