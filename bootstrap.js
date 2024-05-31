const fs = require('fs');

const obj = {
    name: 'top-movies',
    script: './src/app.js',
    instances: 1,
    exec_mode: 'fork',
}

const items = [];
let port = 13010;

for (let i = 1; i < 10; i++) {
    const newObj = { ...obj }
    const newPort = port

    newObj.name = `${newObj.name}-${i}`;

    newObj.env = {
        'NODE_ENV': 'production',
        'PORT': newPort
    }
    port += 1;

    items.push(newObj)
}

const instances = {};
instances.apps = items;

const instancesJson = JSON.stringify(instances);

fs.writeFileSync("process.json", instancesJson)