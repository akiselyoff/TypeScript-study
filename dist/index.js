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
const input3 = document.getElementById('myCity');
if (input3) {
    input3.value = 'Kyiv';
}
const patient = {
    name: 'Alex',
    surname: 'Smith',
    eyeColor: 'Brown',
};
const driver = {
    licence: true,
    additionalInfo: {
        info: 'Always drunk',
    },
};
function showDriverAdditionalInfo() {
    var _a, _b;
    if ((_a = driver === null || driver === void 0 ? void 0 : driver.additionalInfo) === null || _a === void 0 ? void 0 : _a.info) {
        console.log('Additional info about driver: ' +
            ((_b = driver === null || driver === void 0 ? void 0 : driver.additionalInfo) === null || _b === void 0 ? void 0 : _b.info) +
            'Has driver licence: ' +
            driver.licence);
    }
}
showDriverAdditionalInfo();
const userInput = '';
const store = userInput || 'DEFAULT';
console.log(store);
const userInput2 = 0;
const store2 = userInput2 !== null && userInput2 !== void 0 ? userInput2 : 'DEFAULT';
console.log(store2);
function checkUser(name, type) {
    if (type === 'admin') {
        return {
            name,
            type: 'admin',
        };
    }
    else {
        return {
            name,
            type: 'user',
        };
    }
}
const simpleUser = checkUser('Nikita', 'user');
const admin = checkUser('Tonya', 'admin');
//# sourceMappingURL=index.js.map