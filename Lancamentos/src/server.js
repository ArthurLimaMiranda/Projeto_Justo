const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); 

const port = 3001;
const path = './src/arquivos/'

app.get('/despesas', (req, res) => {
  fs.readFile(path+'despesas.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Error reading file');
    }
    res.json(JSON.parse(data));
  });
});

app.post('/despesas/:id', (req, res) => {
    const id = req.params.id;
    const newRecord = req.body;
  
    // Read the existing data from the file
    const data = fs.readFileSync(path+'despesas.json');
  
    // Parse the data to a JavaScript object
    const jsonData = JSON.parse(data);
  
    // Find the record with the specified ID
    const record = jsonData.despesas.find((item) => item.id === id);
  
    // If the record is found, append the new record to the end of the array
    if (record) {
      record.items.push(newRecord);
    } else {
      // If the record is not found, create a new record with the specified ID
      jsonData.despesas.push({
        id: id,
        despesas: [newRecord],
      });
    }
  
    // Write the updated data back to the file
    fs.writeFileSync(path+'despesas.json', JSON.stringify(jsonData, null, 2));
  
    // Send a response with the updated record
    res.send(record || newRecord);
  });


app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });