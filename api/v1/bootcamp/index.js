const express = require('express');
const router = express.Router();
const mongo = require('mongojs');
const db = mongo('mongodb+srv://edbertrhema99:jhrSoTupCRm19NZ1@cluster0.v9ti6pb.mongodb.net/CSR',['todos']);

router.get('/', function(req, res, next){
    db.todos
    .find({},function(err, result){
        if(err){
            res.send(err);
        }else{
            res.json(result);
        }
    });
});

// router.get('/', function(req, res, next){
//     let query = {};
//     if(req.query.text) query.text = req.query.text;
//     if(req.query.isCompleted){
//         if(req.query.isCompleted === 'true') query.isCompleted = true;
//         else query.isCompleted = false;
//     }

//     db.todos
//     .find(query,function(err, result){
//         if(err){
//             res.send(err);            
//         }else{
//             res.json(result);
//         }
//     });
// });

// //4.	Write the GET function to get a specific data entry in the DB:
// router.get('/:id', function(req, res, next){

//     let query = {
//         _id: db.ObjectId(req.params.id)
//     };

//     db.todos
//     .findOne(query, function(err, result){
//         if(err){
//             res.send(err);
//         }else{
//             res.json(result);
//         }
//     });
// });

// //Write the POST function to create a new data entry in the DB:

// router.post('/', function(req, res, next){
//     let todo = req.body;

//     if(!todo.text || !(todo.isCompleted + '')){
//         res.status(400);
//         res.json({
//             "error": "Invalid Data"
//         })
//     }else{
//         db.todos
//         .save(todo, function(err, result){
//             if(err){
//                 res.send(err);
//             }else{
//                 res.json(result);
//             }
//         });
//     }
// });

// //Write the PUT function which will update existing data in the DB:

// router.put('/:id', function(req, res, next){
//     let todo = req.body;

//     if(!todo.text || !(todo.isCompleted + '')){
//         res.status(400);
//         res.json({
//             "error":"Invalid Data"
//         })
//     }else{
//         db.todos
//         .replaceOne({
//             _id:db.ObjectId(req.params.id)
//         }, todo,{}, function(err, result){
//             if(err){
//                 res.send(err);
//             }else {
//                 res.json(result);
//             }
//         });
//     }
// });

// //Write the DELETE function which will delete a data entry in the DB:

// router.delete('/:id', function(req, res, next){{
//     db.todos
//     .remove({
//         _id: db.ObjectId(req.params.id)
//     },function(err, result){
//         if(err){
//             res.send(err);
//         }else{
//             res.json(result);
//         }
//         });
//     }
// });


// router.get('/', function(req, res, next){
//     res.send('Hello, World!')
// });


module.exports = router;