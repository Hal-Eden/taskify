export function updateKeys(arr, obj, arrKey, fallback = '') {
    const newArr = JSON.parse(JSON.stringify(arr));

    newArr.map(item => {
        item[arrKey] = obj[item.name] || fallback;

        return item;
    })

    return newArr;
}

export function handleErrors(errors) {
    console.log(errors)

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
