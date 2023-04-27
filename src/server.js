import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;
const path = './src/arquivos/'

app.get('/:name', (req, res) => {
    const name = req.params.name;
    fs.readFile(path + name + '.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error reading file');
        }
        res.json(JSON.parse(data));
    });
});

app.post('/:titulo/:id', (req, res) => {
    const id = req.body.id;
    const name = req.params.titulo;
    const newRecord = req.body;
    const data = fs.readFileSync(path+ name+'.json');
    const jsonData = JSON.parse(data);
    const record = jsonData.records.find((item) => item.id === id);
    
    if (record) {
        record[name].push(newRecord);
    } else {
        jsonData[name].push({
            id: id,
            name: [newRecord],
        });
    }
    fs.writeFileSync(path+name+'.json', JSON.stringify(jsonData, null, 2));
    res.send(record || newRecord);
});

app.delete('/:titulo/:id/:code', (req, res) => {
    const name = req.params.titulo;
    const id = req.params.id.slice(1); 
    const code = req.params.code.slice(1); 
    const data = fs.readFileSync(path+ name+'.json');  

    const removeJson = JSON.parse(data);
    const record = removeJson.records.find((item) => item.id == id);

    console.log(record)

    let removeIndex = record[name].findIndex(remove => remove.code == code);
    if (removeIndex == -1) {
    res.status(404).send(`Despesa with code ${code} not found in record with ID ${id}`);
    return;
    }

    record[name].splice(removeIndex, 1);
    fs.writeFile(path+name+'.json', JSON.stringify(removeJson, null, 2), err => {
    res.status(204).send();
    });
});

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});