// en la arquitectura esto seria parte de la capa de datos

const collections = {
    todos: require('./todos'),
    users: require('./users'),
}

// funciones de utileria
function validateObject(object, schema) {
    for(let key in object) {
        if(typeof object[key] !== schema[key])
            return false
    }
    return true
}
function getLastId(collection) {
    let data = collections[collection].data
    let lastObj = data[data.length - 1] || {id: 0}
    return lastObj.id
}

// representa un SELECT de SQL
// TODO: tercer parametro es demasiado especifico, deberia ser un objeto que represente filtros adicionales
function select(collection, id, userId) {
    let data = collections[collection].data
    if(id) {
        return data.find(e => e.id === id && (userId ? e.userId === userId : true))
    }else {
        return data.filter(e => userId ? e.userId === userId : true)
    }
}

// representa un INSERT de SQL
function insert(collection, object) {
    let id = getLastId(collection)
    Object.assign(object, {id: id + 1})
    if(validateObject(object, collections[collection].schema)) {
        collections[collection].data.push(object)
        return object
    }
    return null
}

// representa un UPDATE de SQL
function update(collection, object) {
    let id = object.id
    if(validateObject(object, collections[collection].schema)) {
        let data = collections[collection].data
        let element = data.find(e => e.id === id)
        Object.assign(element, object)
        return object
    }
    return null
}

// representa un DELETE de SQL
function remove(collection, id) {
    let data = collections[collection].data
    let index = data.findIndex(e => e.id === id)
    let object = data.splice(index, 1)
    return object
}

module.exports = {
    select,
    insert,
    update,
    remove,
};
