
const addEventByName = function (name, eventName, callback, nameType = 'id',) {

    try {
        const ele = nameType === 'id' ? findById(name) : findByClass(name);
        ele.addEventListener(eventName, callback);
        return true;
    } catch (error) {
        alert('happen wrong');
        console.log(error);
        return false;
    }
}

const addEventByElement = function (ele, eventName, callback, nameType = 'id',) {

    try {
        ele.addEventListener(eventName, callback);
        return true;
    } catch (error) {
        alert('happen wrong');
        console.log(error);
        return false;
    }
}

const findById = function (id) {
    return document.getElementById(id);
}

const findByClass = function (className) {
    return document.querySelector(className);
}

export {
    addEventByName,
    addEventByElement,
    findById,
    findByClass
}