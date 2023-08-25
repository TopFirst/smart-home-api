const dataPath = './src/db.json' // path to our JSON file
const fs = require('fs');

// util functions
const saveData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}
const getData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)   
}

const Get=(req,res,next)=>{
    const dat=getData();
    res.send(dat);
}
const Update = (req, res) => {
    var existData = getData()
    fs.readFile(dataPath, 'utf8', (err, data) => {
      const id = req.params['id'];
      existData[id] = req.body;
      saveData(existData);
      res.send(`data with id ${id} has been updated`)
    }, true);
}

module.exports={
    Get,
    Update
}