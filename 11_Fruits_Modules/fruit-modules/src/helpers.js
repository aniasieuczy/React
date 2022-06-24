function choice(items) {
   let idx = Math.floor(Math.random() * items.length);
   return items[idx];
}

function remove(items, item) {
    // for(let i of items) {
    //     if(i === item) {
    //         return items.splice(i, 1);
    //     }
    // }

    for(let i =0; i< items.length; i++) {
        if(items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)];
        }
    }
}

export { choice, remove };