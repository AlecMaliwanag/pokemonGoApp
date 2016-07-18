//problem: a strong mysterious pokemon with little information
//solution: return information on the pokemon as well as a list of counter pokemon and moves

function pokemon(name, number, type1, type2, tier) {
    this.name = name;
    this.number = number;
    this.type1 = type1;
    this.type2 = type2;
    this.tier = tier;
}


var bulbasaur = new pokemon("bulbasaur","001","grass","poison","13");

var ivysaur  = new pokemon("ivysaur", "002", "grass", "posion", "22");

var venusaur = new pokemon("venusaur", "003", "grass", "poison", "33");

var charmander = new pokemon("charmander", "004", "fire", "", "13");

var charmeleon = new pokemon("charmeleon", "005", "fire","", "23");

var charizard = new pokemon("charizard", "006", "fire", "flying","33");

var squirtle = new pokemon("squirtle", "007", "water", "", "13");

var wartortle = new pokemon("wartortle","008", "water", "", "21");

var blastoise = new pokemon("blastoise", "009","water", "","32");

var caterpie = new pokemon("caterpie", "010", "bug", "", "5");

var metapod = new pokemon("metapod", "011", "bug", "", "6");

var butterfree = new pokemon("butterfree", "012","bug", "18");

var weedle = new pokemon("weedle", "013", "bug", "poison","5");

var kakuna = new pokemon("kakuna", "014", "bug", "poison","7");

var beedrill = new pokemon("beedrill", "015", "bug", "poison", "20");

var pidgey = new pokemon("pidgey", "016", "normal", "flying", "10");

var pidgeotto = new pokemon("pidgeotto","017", "normal", "flying", "18");

var pidgeot = new pokemon("pidgeot", "018", "normal", "flying", "29");

var rattata = new pokemon("rattata","019","normal", "", "7");

var raticate = new pokemon("raticate","020","normal", "", "20");

var spearow = new pokemon("spearow", "021", "normal", "", "9" );

var pokedex = [bulbasaur,ivysaur,venusaur,charmander,charmeleon,charizard,squirtle,wartortle,blastoise,caterpie,metapod,butterfree,weedle,kakuna,beedrill,pidgey,pidgeotto,pidgeot,rattata,raticate,spearow]
var type = ["normal","fire","water","electric","grass","ice","fighting","poison","ground","flying","psychic","bug","rock","ghost","dragon","dark","steel","fairy"]
//data
//array of all pokemon, type, tier level
// arrays of each type of pokemon


//1. take user input and locate pokemon in database

function pokemonFinder(pokemon) {
	var targetPokemon = pokemon
	var match = false

	for (var i = 0; i < pokedex.length; i++) {
		if (targetPokemon == pokedex[i].name) {
			var targetPokemon = pokedex[i];
			var match = true
			console.log(targetPokemon.number)
		}

	}
	//if no match, give error message
	// if (!match) {
	// 	document.getElementById("output").innerHTML = 
	// 	"Are you sure you put in a correct pokemon? "  
		
	// }
	return targetPokemon;
}


//function that figures out counter types

function typeCounter(targetPokemon) {
	if (targetPokemon.type1 === "fire") {
		var counter1 = ["rock","water","ground"]
	}
	if (targetPokemon.type1 === "water") {
		var counter1 = ["electric","grass",]
	}
	if (targetPokemon.type1 === "grass") {
		var counter1 = ["fire","ice","poison","flying","bug"]
	}
	if (targetPokemon.type1 === "electric") {
		var counter1 = ["ground"]
	}
	if (targetPokemon.type1 === "normal") {
		var counter1 = ["fighting"]
		//make sure you deal with this 
	}
	if (targetPokemon.type1 === "ice") {
		var counter1 = ["fire","fighting","rock","steel"]
	}
	if (targetPokemon.type1 === "poison") {
		var counter1 = ["ground","psychic"]
	}
	if (targetPokemon.type1 === "fighting") {
		var counter1 = ["flying","psychic","fairy"]
	}
	if (targetPokemon.type1 === "ground") {
		var counter1 = ["water","grass","ice"]
	}
	if (targetPokemon.type1 === "rock") {
		var counter1 = ["water","grass","fighting","ground","steel"]
	}
	if (targetPokemon.type1 === "psychic") {
		var counter1 = ["bug","ghost","dark"]
	}
	if (targetPokemon.type1 === "bug") {
		var counter1 = ["fire","flying","rock"]
	}
	if (targetPokemon.type1 === "flying") {
		var counter1 = ["electric","ice","rock"]
	}
	if (targetPokemon.type1 === "dragon") {
		var counter1 = ["ice","dragon","fairy"]
	}
	if (targetPokemon.type1 === "fairy") {
		var counter1 = ["poison","steel"]
	}
	if (targetPokemon.type1 === "ghost") {
		var counter1 = ["ghost","dark"]
	}
	if (targetPokemon.type1 === "dark") {
		var counter1 = ["fighting","bug","fairy"]
	}

	//second type
	if (targetPokemon.type2 === "fire") {
		var counter2 = ["rock","water","ground"]
	}
	if (targetPokemon.type2 === "water") {
		var counter2 = ["electric","grass",]
	}
	if (targetPokemon.type2 === "grass") {
		var counter2 = ["fire","ice","poison","flying","bug"]
	}
	if (targetPokemon.type2 === "electric") {
		var counter2 = ["ground"]
	}
	if (targetPokemon.type2 === "normal") {
		var counter2 = ["fighting"]
		//make sure you deal with this 
	}
	if (targetPokemon.type2 === "ice") {
		var counter2 = ["fire","fighting","rock","steel"]
	}
	if (targetPokemon.type2 === "poison") {
		var counter2 = ["ground","psychic"]
	}
	if (targetPokemon.type2 === "fighting") {
		var counter2 = ["flying","psychic","fairy"]
	}
	if (targetPokemon.type2 === "ground") {
		var counter2 = ["water","grass","ice"]
	}
	if (targetPokemon.type2 === "rock") {
		var counter2 = ["water","grass","fighting","ground","steel"]
	}
	if (targetPokemon.type2 === "psychic") {
		var counter2 = ["bug","ghost","dark"]
	}
	if (targetPokemon.type2 === "bug") {
		var counter2 = ["fire","flying","rock"]
	}
	if (targetPokemon.type2 === "flying") {
		var counter2 = ["electric","ice","rock"]
	}
	if (targetPokemon.type2 === "dragon") {
		var counter2 = ["ice","dragon","fairy"]
	}
	if (targetPokemon.type2 === "fairy") {
		var counter2 = ["poison","steel"]
	}
	if (targetPokemon.type2 === "ghost") {
		var counter2 = ["ghost","dark"]
	}
	if (targetPokemon.type2 === "dark") {
		var counter2 = ["fighting","bug","fairy"]
	}
	if (targetPokemon.type2 === "") {
		var counter2 = "";
	}

	console.log(counter1 + counter2);
	var allCounters = counter1.concat(counter2);
	return allCounters;
}



// } 


//3  function that pulls arrays of the strongest pokemon in each element
function typeArrayBuilder(type) {
	var typeList = []
	for (var i = 0; i < pokedex.length; i++) {
		if (type === pokedex[i].type1 || type === pokedex[i].type2) {
			typeList.push(pokedex[i]);
			
		}
	}
	console.log(typeList);
	return typeList;

}



//4 builds the aggregate counter list

function counterCompiler(types) {
	var counterList = [];
	for (var i = 0; i < types.length; i ++) {
		counterList = counterList.concat(typeArrayBuilder(types[i]));
	}
	console.log(counterList);
	return counterList;
}

function getCounters(pokemon){
counterCompiler(typeCounter(pokemonFinder(pokemon)));
};

getCounters("charmander")
