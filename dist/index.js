"use strict";
const user = {
    name: 'Max',
    age: 25,
    password: 'qwerty',
};
function showFields(obj) {
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
const input = document.getElementById('first_name');
input.value = 'Vika';
console.log(input.value);
const input2 = document.getElementById('last_name');
input2.value = 'Boris';
//# sourceMappingURL=index.js.map