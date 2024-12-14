export function updateKeys(arr, obj, arrKey, fallback = '') {
    const newArr = JSON.parse(JSON.stringify(arr));

    newArr.map(item => {
        console.log(arr, obj, arrKey)
        item[arrKey] = obj[item.name] || fallback;
        console.log(item)
        return item;
    })

    console.log(newArr)

    return newArr;
}

export function handleErrors(errors) {
    console.log(errors);

    if (!errors.response) {
        throw errors;
    }

    const responseData = errors.response.data;

    if (responseData.errors) {
        return responseData;
    }

    throw errors;
}

export function debounce(fn, timeout = 300) {
    let timer;

    return function () {
        clearTimeout(timer)

        var args = arguments
        var that = this

        timer = setTimeout(function () {
            fn.apply(that, args)
        }, timeout)
    }
}
