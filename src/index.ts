type User = {
  name: string;
  age: number;
};

interface IUser {
  name: string;
  age: number;
}

type Admin = {
  name: string;
  password: string;
};

interface IAdmin {
  name: string;
  password: string;
}

type SuperUser = User & Admin;

interface ISuperUser extends User, Admin {}

const user: SuperUser = {
  name: 'Max',
  age: 25,
  password: 'qwerty',
};

type UnknownUser = IUser | IAdmin;

function showFields(obj: UnknownUser) {
  console.log(obj.name);
  if ('age' in obj) {
    console.log('Age: ' + obj.age + ' years old');
  }
  if ('password' in obj) {
    console.log('Password is: ' + obj.password);
  }
}

showFields({ name: 'Mary', age: 21 });
showFields({ name: 'Nik', password: '12345' });
