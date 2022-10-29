let num: number;
let str: string;
let bool: boolean;
let empty: null;
let notParam: undefined;

num = 10;
num = Number('1');
str = 'Some string';
bool = true;
empty = null;
notParam = undefined;

function argumentsDefault(num: number, str: string, str2 = 'John') {
  // str2 = 10;
  str2 = 'Max';
}

let arrString: string[];
arrString = ['Max', 'Ann'];

const objString: { name?: string } = {};
objString.name = 'Dan';

let arrObj: { name: string }[];
arrObj = [{ name: 'Bob' }, { name: 'Jack' }];

const data: { id: number; name: { firstName: string; secondName?: string } } = {
  id: 12345,
  name: { firstName: 'Tom' },
};

let some: any;
some = 10;
some = 'text';
some = {};
some = [];
let numb: number;
numb = some;

let someUn: unknown;
someUn = 10;
// numb = someUn;
if (typeof someUn === 'number') {
  numb = someUn;
}

let fixed: [string, number];
fixed = ['text', 10];
// fixed = [10, 'text'];

enum Role {
  ADMIN,
  USER,
}
const person = { role: Role.ADMIN };
if (person.role === Role.ADMIN) {
  console.log('Role: ', Role.ADMIN); // Role: 0
}

let union: string | number;
union = 'text';
union = 5;
function combine(param1: number | string, param2: number | string) {
  if (typeof param1 === 'number' && typeof param2 === 'number') {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

let literal: 'first' | 'second';
literal = 'first';
function greeting(action: 'hello' | 'bye') {
  if (action === 'hello') {
    console.log('Hello user!');
  } else {
    console.log('Bye user!');
  }
}

function returnResult(num: number): number {
  // return 'text';
  return num;
}

function print(): void {
  console.log('Print some text');
  // return 5;
}

function generateError(message: string, status: number): never {
  throw { message, status };
  // return 5;
}
generateError('An error', 500);

let callbackFn: (num: number) => number;
callbackFn = num => {
  return num;
};

function sum(
  param1: number,
  param2: number,
  callbackFn: (num1: number, num2: number) => number
) {
  const result = callbackFn(param1, param2);
  return result;
}
sum(2, 3, (num1, num2) => num1 + num2);

type DatabaseDate = {
  id: number;
  price: number;
  permission: string[];
  details: {
    title: string;
    description?: string;
  };
};
const data2: DatabaseDate = {
  id: 1,
  price: 10.99,
  permission: ['read', 'write'],
  details: {
    title: 'New product',
    description: 'This is awesome product!',
  },
};

type CustomType = {
  name: string;
  sex?: 'man' | 'woman';
};
const person2: CustomType = {
  name: 'Don',
};
person2.sex = 'man';
