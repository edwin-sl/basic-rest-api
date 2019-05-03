const name = 'users'

let schema = {
    id: 'number',
    name: 'string',
    lastName: 'string'
}

// contenido inicial
let data = [
    {
        id: 1,
        name: "Edwin",
        lastName: "Salinas"
    }
]

module.exports = {
    schema,
    data,
}
