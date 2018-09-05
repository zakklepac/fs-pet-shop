const fs = require('fs');
const path = require('path');

let node = path.basename(process.argv[0]);
let file = path.basename(process.argv[1]);

let cmd = process.argv[2];
let age = parseInt(process.argv[3])
let kind = process.argv[4]
let name = process.argv[5]

if (cmd === 'read') {
    fs.readFile('./pets.json', 'utf8', (err, data) => {
        const myPets = JSON.parse(data);
        //get data
        let petData = process.argv[3];
        //print all if undefined
        if (petData === undefined) {
            console.log(myPets)
        } else {
            //print all
            console.log(myPets[petData]);
        }
    });
} else if (cmd === 'create') {
    fs.readFile('./pets.json', 'utf8', (err, data) => {
        if (age && kind && name){
            const myPets = JSON.parse(data);
            const newPet = {
                'age':  age,
                'kind': kind,
                'name': name
            };
            myPets.push(newPet);
            fs.writeFile('./pets.json', JSON.stringify(myPets), (err) => {
                console.log(newPet);
            })
            } else {
                console.error('Usage: node pets.js create AGE KIND NAME')
                process.exit(1)
            } 
        })
    } else {
    console.error(`Usage: ${node} ${file} [read | create | update | destroy]`);
    process.exit(1);
}