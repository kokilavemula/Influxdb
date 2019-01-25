const Influx = require('influx');
const url = 'http://localhost:8086/mydbs';
const influx = new Influx.InfluxDB(url);
influx.getDatabaseNames().then(names=>{
    if(!names.includes('mydbs')){
        console.log(' database created');
        return influx.createDatabase('mydbs');
    }
    else{
        console.log('db already exist');
    }
});
influx
module.exports = influx;