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
    const didOperationSucceed = Math.random() >= 0.6;
    if (didOperationSucceed){
    const degrees = getMarsTemperature();
    return success(degrees);
    } else {
      const errorMessage = handleError('Robot is busy');
      return notSuccess(errorMessage);
    }
  }, messageDelay())
}

sendMarsTemperature(temperatureInFahrenheit, handleError);

sendMarsTemperature(greet, handleError);