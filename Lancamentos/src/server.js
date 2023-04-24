const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); 

app.get('/despesas', (req, res) => {
  fs.readFile('./arquivos/despesas.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Error reading file');
    }
    res.json(JSON.parse(data));
  });
});

app.post('/despesas/:id', (req, res) => {
    const id = req.params.id;
    const newData = req.body;
  
    fs.readFile('./arquivos/despesas.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
        return;
      }
  
      const json = JSON.parse(data);
      const record = json.records.find(r => r.id === id);
  
      if (!record) {
        res.sendStatus(404);
        return;
      }
  
      record.push(newData);
  
      fs.writeFile('./arquivos/despesas.json', JSON.stringify(json), err => {
        if (err) {
          console.error(err);
          res.sendStatus(500);
          return;
        }
  
        res.sendStatus(200);
      });
    });
  });

  app.get('/recebiveis', (req, res) => {
    fs.readFile('./arquivos/recebiveis.json', 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send('Error reading file');
      }
      res.json(JSON.parse(data));
    });
  });

  app.post('/recebiveis/:id', (req, res) => {
    const id = req.params.id;
    const newData = req.body;
  
    fs.readFile('./arquivos/recebiveis.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
        return;
      }
  
      const json = JSON.parse(data);
      const record = json.records.find(r => r.id === id);
  
      if (!record) {
        res.sendStatus(404);
        return;
      }
  
      record.push(newData);
  
      fs.writeFile('./arquivos/recebiveis.json', JSON.stringify(json), err => {
        if (err) {
          console.error(err);
          res.sendStatus(500);
          return;
        }
  
        res.sendStatus(200);
      });
    });
  });

app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });