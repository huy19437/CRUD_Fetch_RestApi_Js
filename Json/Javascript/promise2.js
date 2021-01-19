var promise = new Promise((resolve, reject) => {
    resolve()
})

promise
    .then(() => {
        console.log(1);
        return new Promise((resolve) => {
            resolve("hi")
        })
    })
    .then((value) => {
        console.log(2);
        console.log((value));
    })