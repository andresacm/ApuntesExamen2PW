import  express, { request }  from "express";
import bodyParser from "body-parser";

var app = express();

app.use(bodyParser.json())
/*
app.get('/', (request, response) => {
    return response.json({result: 'OK'})
})

app.get('/courses', (request, response) => {
    return response.json([{id: 1, name: 'POO'}, {id: 2, name: 'Progra Web'}])
})
*/
let people = [{id: 1, name: 'John', lastname: 'Smith'}, 
{id: 2, name: 'George', lastname: 'Perez'},
{id: 3, name: 'Stan', lastname: 'Lee'}
]

app.get('/people', (request, response) => {
    return response.json(people)
})

app.post('/people', (request, response) =>{
    console.log(request.body)

    people.push(request.body)

    return response.json(people)
})

app.listen(3001, () =>{
    console.log('El servidor esta escuchando')
})