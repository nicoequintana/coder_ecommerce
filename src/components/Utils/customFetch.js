
let condition = true

export function customFetch (time, task) {
    return new Promise ((resolve, reject) => {

        setTimeout(() => {
            if (condition) {
                resolve(task);
            } else {
                reject('error')
            }
        }, time)

    })
}

export function traerProducto (time, task)  {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(task);
        }, time);
    });
}
