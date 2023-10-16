// let a = 12;
// console.log(a);

var requesthttp = require("http");
var filesystemmodule = require("fs");
var urlmodule = require("url");
var nodemailerex = require("nodemailer")
//var exampleurl = "http://localhost:8080/home?username=rambabu";

requesthttp.createServer(function (req,res){
    var parsedurl = urlmodule.parse(req.url,true);
    console.log(parsedurl);
    var filename = "."+parsedurl.pathname+".html";

    if (req.url == "/"){
        filename = "index.html";
    }
    
        filesystemmodule.readFile(filename,function(err,data){    
            //console.log(req.url);
            //console.log(data);
            if (err){
            res.writeHead(404,{"Content-Type":"text/html"});
            res.write("Error Found");
            res.end();
            
            }
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
            }
            );
    
    }
    ).listen("8080");