const isNumber = val => typeof val === 'number';
const isString = val => typeof val === 'string';
const isBoolean = val => typeof val === 'boolean';
const isArray = val => Array.isArray(val) === true;
const isObject = val => typeof val === 'object' && Array.isArray(val) === false;
const isFunction = val => typeof val === 'function';

const castToNumber = val => {
  if(isNumber(val)) return val;
  const number = Number(val);
  if(isNaN(number)) throw new CastError(Number, val);
  return number;
};
const castToString = val => {
  const string = String(val);
  return string;
};
const castToBoolean = val => {
  const boolean = Boolean(val);
  return boolean;
};

class CastError extends Error {
  constructor(Type, value) {
    const type = Type.name;
    super(`Cannot cast >>${value}<< to ${type}`);
    this.type = type;
    this.value = value;
  }
}

const casters = {
  Number: castToNumber,
  Boolean: castToBoolean,
  String: castToString
};

const getCaster = Type => {  
  return casters[Type.name] || null;
};

module.exports = {
  isNumber,
  isBoolean,
  isArray,
  CastError,
  getCaster,
  castToNumber,
  castToString,
  castToBoolean,
  isString,
  isFunction,
  isObject,
};
