function namespace(root, path, value) {
    const arr = path.split('.');
    let res;
    let obj = root;
    arr.forEach((el, i) => {
        const seen = obj[el]
        obj[el] = obj[el] || {};
        if (arr.length - 1 === i) {
            if (typeof value === 'undefined') {
                if (seen) {
                    res = obj[el]
                } else {
                    res = undefined
                }
            } else {
                obj[el] = value;
            }
        }
        obj = obj[el];
    });
    return typeof value === 'undefined' ? res : root
}