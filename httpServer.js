'use strict';
const fs = require('fs');
const http = require('http');

// let node = path.basename(process.argv[0]);
// let file = path.basename(process.argv[1]);

// let cmd = process.argv[2];
// let age = parseInt(process.argv[3])
// let kind = process.argv[4]
// let name = process.argv[5]


//GET POST DELETE UPDATE
//CRUD ---> POST GET UPDATE DELETE (serve must understand these) 
//post === create
//get === read

//create a server
//two params for any server

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/pets') {
        fs.readFile('./pets.json', 'utf8', function (err, myPets) {
            if (err) {
                console.error(err.stack);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                return res.end('Internal Server Error');
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(myPets);
        });
    } else if (req.method === 'GET' && req.url === '/pets/0') {
        fs.readFile('./pets.json', 'utf8', function (err, myPets) {
            if (err) {
                console.error(err.stack);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                return res.end('Internal Server Error');
            }

            let pets = JSON.parse(myPets);
            let myPet = JSON.stringify(pets[0]);

            res.setHeader('Content-Type', 'application/json');
            res.end(myPet);
        });
    } else if (req.method === 'GET' && req.url === '/pets/1') {
        fs.readFile('./pets.json', 'utf8', function (err, myPets) {
            if (err) {
                console.error(err.stack);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                return res.end('Internal Server Error');
            }

            let pets = JSON.parse(myPets);
            let myPet = JSON.stringify(pets[1]);

            res.setHeader('Content-Type', 'application/json');
            res.end(myPet);
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not found');
    }
});


server.listen(8000, () => {
    console.log('aye')
})

//allows for tests to evalute the server code
module.exports = server;