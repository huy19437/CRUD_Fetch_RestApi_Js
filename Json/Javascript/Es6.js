// function highLight(...rest) {
//     console.log(rest);
// }

// var name = 'huy'
// var age = '21'

// highLight`toi ten la ${name}, toi ${age} tuoi`
const obj = {
    getName(value) {
        console.log(value);
    }
}

obj.getName?.(123)