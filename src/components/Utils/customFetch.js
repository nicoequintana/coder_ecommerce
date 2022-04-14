let condition = true

const customFetch = (time, task) => {
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

export default customFetch;