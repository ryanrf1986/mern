const pokemon = Object.freeze([
    { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
    { id: 5, name: "Charmeleon", types: ["fire"] },
    { id: 9, name: "Blastoise", types: ["water"] },
    { id: 12, name: "Butterfree", types: ["bug", "flying"] },
    { id: 16, name: "Pidgey", types: ["normal", "flying"] },
    { id: 23, name: "Ekans", types: ["poison"] },
    { id: 24, name: "Arbok", types: ["poison"] },
    { id: 25, name: "Pikachu", types: ["electric"] },
    { id: 37, name: "Vulpix", types: ["fire"] },
    { id: 52, name: "Meowth", types: ["normal"] },
    { id: 63, name: "Abra", types: ["psychic"] },
    { id: 67, name: "Machamp", types: ["fighting"] },
    { id: 72, name: "Tentacool", types: ["water", "poison"] },
    { id: 74, name: "Geodude", types: ["rock", "ground"] },
    { id: 87, name: "Dewgong", types: ["water", "ice"] },
    { id: 98, name: "Krabby", types: ["water"] },
    { id: 115, name: "Kangaskhan", types: ["normal"] },
    { id: 122, name: "Mr. Mime", types: ["psychic"] },
    { id: 133, name: "Eevee", types: ["normal"] },
    { id: 144, name: "Articuno", types: ["ice", "flying"] },
    { id: 145, name: "Zapdos", types: ["electric", "flying"] },
    { id: 146, name: "Moltres", types: ["fire", "flying"] },
    { id: 148, name: "Dragonair", types: ["dragon"] },
]);

// an array of pokemon objects where the id is evenly divisible by 3
const arr1 = pokemon.filter( (p) => !(p.id % 3) )

// an array of pokemon objects that are "fire" type
const arr2  = pokemon.filter( (p) => p.types.includes("fire"))

// an array of pokemon objects that have more than one type
const arr3 = pokemon.filter( (p) => p.types.length > 1)

// an array with just the names of the pokemon
const arr4 = pokemon.map( (p) => p.name )

// an array with just the names of pokemon with an id greater than 99
const arr5 = pokemon.filter( (p) => p.id > 99).map( (p) => p.name)

// an array with just the names of the pokemon whose only type is poison
const arr6 = pokemon.filter( (p) => p.types.length > 1 && p.types.includes("poison") ).map( (p) => p.name )

// an array containing just the first type of all the pokemon whose second type is "flying"
const arr7 = pokemon.filter( (p) => p.types[1] === "flying").map( (p) => p.types[0])

// a count of the number of pokemon that are "normal" type
const normalPokemonCount = pokemon.filter( (p) => p.types.includes("normal") ).length