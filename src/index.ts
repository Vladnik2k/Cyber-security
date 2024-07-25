import './Task-1';
import { createImmutableObject } from './Task-2';
import { getCurrentScript } from './Task-3';

// Task 1
const classes = document.querySelectorAll('div').map(el => {
    if (el instanceof Element) {
        return el.className;
    }
});
console.log(classes);

// Task 2

const object = { foo: 'bar' };
const immutableObject = createImmutableObject(object);

// Will throw errors
// @ts-ignore
// immutableObject.foo = null;
// @ts-ignore
// immutableObject.property = 'I can\'t add new fields';

console.log(immutableObject);

// Task 3

console.log(getCurrentScript());
