const fs = require('fs') ;

// Create File : student.txt

 fs.appendFileSync('student.txt' , 'Hello world' , function(err){
     if (err) throw err ;
     console.log('File Created successfully');
 });

// Open File

 fs.open('student.txt' ,'w' , function(err , file){
     if (err) throw err ;
     console.log('File Open Successfully') ;
 });

// Write File 

 fs.writeFileSync('student.txt' ,'Create a file using node js') ;

// Read From The File

 const result = fs.readFileSync('student.txt' , 'UTF-8') ;
 console.log(result) ;

// Append The File

 fs.appendFileSync('student.txt' ,'\nAppend Extra Content In Created File .')

// Delete File

 fs.unlinkSync('student.txt') ;
