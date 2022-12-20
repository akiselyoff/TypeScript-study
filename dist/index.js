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
//# sourceMappingURL=index.js.map