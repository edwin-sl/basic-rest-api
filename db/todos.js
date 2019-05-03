const name = 'todos'

let schema = {
    id: 'number',
    userId: 'number',
    title: 'string',
    description: 'string'
}

// contenido inicial
let data = [
    {
        id: 1,
        userId: 1,
        title: "lunch",
        description: "Go for lunc by 2pm"
    }
]

module.exports = {
    schema,
    data,
}
