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

function arguments(num: number, str: string, str2 = 'John') {
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
