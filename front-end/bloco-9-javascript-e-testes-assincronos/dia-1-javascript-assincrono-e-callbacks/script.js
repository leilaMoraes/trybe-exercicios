//Exercício 1
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} está a ${value} ${measurementUnit} de distância do Sol`;

const MEASUREMENT_UNIT = 'quilômetros';

const mars = {
  name: 'Marte',
  distanceFromSun: {
    value: 227900000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

const venus = {
  name: 'Venus',
  distanceFromSun: {
    value: 108200000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

const jupiter = {
  name: 'Jupiter',
  distanceFromSun: {
    value: 778500000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

console.log(planetDistanceFromSun(mars)); // A primeiro
console.log(planetDistanceFromSun(venus)); // B segundo
console.log(planetDistanceFromSun(jupiter)); // C terceiro

// Exercício 2

const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} está a ${value} ${measurementUnit} de distância do Sol`;

const MEASUREMENT_UNIT = 'quilômetros';

const mars = {
  name: 'Marte',
  distanceFromSun: {
    value: 227900000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

const venus = {
  name: 'Venus',
  distanceFromSun: {
    value: 108200000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

const jupiter = {
  name: 'Jupiter',
  distanceFromSun: {
    value: 778500000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

console.log(planetDistanceFromSun(mars)); // A primeiro
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B terceiro
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C segundo

//Exercício 3
// Acrescentei o setTimeout no console.log

const getPlanet = () => {
  const mars = {
    name: 'Mars',
    distanceFromSun: {
      value: 227900000,
      measurementUnit: 'kilometers',
    },
  };
  setTimeout(() => console.log('Returned planet: ', mars), 4000);
};

getPlanet();

//Exercício 4

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// Função que eu criei

const sendMarsTemperature = () => {
const delay = messageDelay();
const temperature = getMarsTemperature();
setTimeout(() => console.log(`A temperatura de Marte é: ${temperature} graus celsius`), delay);
};

sendMarsTemperature();

//Exercício 5

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) =>
  console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

// Função que eu criei

const sendMarsTemperature = (callback) => {
  setTimeout(() => {
    const degrees = getMarsTemperature();
    return callback(degrees);
  }, messageDelay())
}

sendMarsTemperature(temperatureInFahrenheit);

sendMarsTemperature(greet);

//Exercício 6

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// Função que eu criei

const sendMarsTemperature = (success, notSuccess) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() <= 0.6; //corrigido o sinal de > para < pq da forma que eu fiz antes, acho q estava sendo interpretado como menor que 60%, bem q eu estranhei q dava mais errado do q certo. rsrs.
    if (didOperationSucceed){
    const degrees = getMarsTemperature();
    return success(degrees);
    } else {
      return notSuccess('Robot is busy');
      //corrigido, pois colocando na constante tava retornando mensagem de erro a mais
    }
  }, messageDelay())
}

sendMarsTemperature(temperatureInFahrenheit, handleError);

sendMarsTemperature(greet, handleError);

//Exercício 7

const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grama',
    ability: 'Raio Solar',
  },
  {
    name: 'Charmander',
    type: 'Fogo',
    ability: 'Lança Chamas',
  },
  {
    name: 'Squirtle',
    type: 'Água',
    ability: 'Jato de Água',
  },
];

function getPokemonDetails(selectedPokemon, callback) {
  const foundPokemon = pokemons.find((pokemon) => pokemon.name === selectedPokemon);

  setTimeout(() => {
    if (foundPokemon === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }

    const { name, type, ability } = foundPokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

const handlePokemonSearch = (error, message) => {
  if (error) { //descobri pelo gabarito que era mais simples ainda do que eu pensei
    console.log(error);
  } else {
    console.log(message);
  }
};

getPokemonDetails(/* selectedPokemon*/, handlePokemonSearch);

//Exercício 8

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

//Acho que primeiro será consolado o beforEach, depois o test, depois o afterEach, depois o beforeEach de novo, o bloco describe todo e o afterEach.
//Depois de olhar o gabarito que eu reparei direito que tem um beforeEach e um afterEach dentro do Describe, então, será consolado o beforeEach e o afterEach dentro do describe tbm, além de do lado de fora