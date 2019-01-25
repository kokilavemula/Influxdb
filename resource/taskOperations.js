const influx = require('../DB/index');



const createData = function(req,res){
    return influx.writePoints([req.body]).then(()=>{
    console.log(req.body);
        console.log('successfully created');
        return res.send({
            status : 200,
            message : 'successfully created'
        });
    });
}

var getAllSeriesData = function(req,res){
    return influx.query(`select * from task`).then(data=>{
        return res.send({
            status : 200,
            message : data
        });
    }).catch(err=>{
        console.log('error : ',err);
        return res.status(500).send(err);
    })
}

const getOneSeriesData = function(req,res){
    return influx.query(`select * from task where title = 'milk' `).then(data=>{
        console.log('data from get one series method : ',data);
        console.log(data);
        return res.send(data);
    })
} 
const deleteSeriesData = function(req,res){
     console.log('req data : ',req.params.title,`'${req.params.title}'`);
    influx.query(`DELETE FROM task WHERE title='${req.params.title}'`).then(()=>{
        console.log('series data deleted successfully');
        res.send({
            status : 200,
            message : 'series data deleted successfully'
        });
    })
}

exports.createData = createData;
exports.getOneSeriesData = getOneSeriesData;
exports.getAllSeriesData = getAllSeriesData;
exports.deleteSeriesData = deleteSeriesData;