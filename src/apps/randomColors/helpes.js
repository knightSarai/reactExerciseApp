function choice(arr) {
    console.log(arr);
    return arr[Math.floor(Math.random() * arr.length)];
}

export {choice};