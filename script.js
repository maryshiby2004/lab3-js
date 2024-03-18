// JavaScript function to create a hamburger object
function createHamburger(options) {
    return {
        buns: options.buns || 'Regular bun',
        vegetableGarnishes: options.vegetableGarnishes || 'Lettuce, tomato, onion',
        cheeses: options.cheeses || 'Cheddar cheese',
        sauces: options.sauces || 'Ketchup, mustard',
        meat: options.meat || 'Beef patty',
        patties: options.patties || 1,
        extraIngredients: options.extraIngredients || [],
        describe: function() {
            let description = `Your hamburger: ${this.buns} with ${this.vegetableGarnishes}, ${this.cheeses}, ${this.sauces}, ${this.patties} ${this.meat} patty`;
            if (this.extraIngredients.length > 0) {
                description += `, with ${this.extraIngredients.join(', ')}`;
            }
            return description + '.';
        }
    };
}

// Function to generate random options for the hamburger
function getRandomOptions() {
    const possibleBuns = ['Regular bun', 'Whole wheat bun', 'Gluten-free bun'];
    const possibleVegetableGarnishes = ['Lettuce, tomato, onion', 'Lettuce, tomato, pickles', 'Lettuce, onion, pickles'];
    const possibleCheeses = ['Cheddar cheese', 'Swiss cheese', 'Pepper jack cheese'];
    const possibleSauces = ['Ketchup, mustard', 'Special sauce', 'BBQ sauce'];
    const possibleMeats = ['Beef patty', 'Chicken patty', 'Veggie patty'];
    const possiblePatties = [1, 2, 3];

    const randomOptions = {
        buns: possibleBuns[Math.floor(Math.random() * possibleBuns.length)],
        vegetableGarnishes: possibleVegetableGarnishes[Math.floor(Math.random() * possibleVegetableGarnishes.length)],
        cheeses: possibleCheeses[Math.floor(Math.random() * possibleCheeses.length)],
        sauces: possibleSauces[Math.floor(Math.random() * possibleSauces.length)],
        meat: possibleMeats[Math.floor(Math.random() * possibleMeats.length)],
        patties: possiblePatties[Math.floor(Math.random() * possiblePatties.length)],
        extraIngredients: []
    };

    return randomOptions;
}

// Function to update hamburger components with random options and display description
function updateHamburger() {
    // Define new hamburger components with random options
    let newComponents = getRandomOptions();

    // Create new hamburger object with updated components
    let myHamburger = createHamburger(newComponents);

    // Output the description
    document.getElementById('output').innerText = myHamburger.describe();
}

// Event listener for button click
document.getElementById('updateButton').addEventListener('click', updateHamburger);
