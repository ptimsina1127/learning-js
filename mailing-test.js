var mysqlobject = require("mysql2");
var connection = mysqlobject.createConnection({
    host : "localhost",
    user : "root",
    password : "pass123",
    database : "learningjs"
}
);
connection.connect(function (err){
    if (err){
        throw err;
    }
    else{
        var SQLquery = "insert into students (sid,sname,saddress,sphone) VALUES (001,'pravat', 'dhumbarahi',41598) ";
        console.log("Connection Successful...");
        connection.query(SQLquery,function (err,result){
            if (err) throw err;
            console.log("Table Created");
        }           
        );
    }
}
);

// const createTransport  = require("nodemailer");
// var transport = createTransport.createTransport({
//     service: "gmail",
//     auth:{
//         user:"pravatkiran28@gmail.com",
//         pass:"kxwb kyth qxwh oyvj"
//     }
// }
// );

// var mailTemplate = {
//     from : "pravatkiran28@gmail.com",
//     to : "laniniv995@cindalle.com",
//     subject : "URGENT",
//     text : "Hello This is an Emergency"
// };

// transport.sendMail(mailTemplate,function (err,info){
//     if (err){
//         console.log(err);
//     }

//     else{
//         console.log("SUCCESS");
//     }
// }
// );