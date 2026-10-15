const express = require('express');
const conn = require('./conn');
const app = express();

app.use(express.static('public'));
//to parse json bodies
app.use(express.urlencoded({ extended: true}));

app.set("view engine", 'ejs');
 // return index page
app.get('/', (req,res) => {
    res.render('index');
});

app.post('/register', (req, res) => {
    const ln = req.body.ln;
    const fn = req.body.fn;
    const age = req.body.age;
    const add = req.body.add;

    const insert = `INSERT INTO tbl_students VALUES('0','${ln}','${fn}','${age}','${add}')`;

    // to execute the query
    conn.query(insert,(err)=>{
        if(err) throw err;
       res.send(
        `<script>
        alert('Data Inserted');
        location.href = '/';
        </script>`
);
    });

    // Do something with the registered data, e.g., save to database

    console.log(ln);
});

// route for displaying data
app.get('/view', (req, res)=>{
    const getData = 'SELECT * FROM tbl_students';

    // to execute the query
    conn.query(getData,(err, students)=>{
        if(err)throw err;
        res.render('view', {
            student: students 
        })

    });

});//Closing of Displaying Data
app.get('/delete/:id', (req,res) => {
    const del_id = req.params.id;

    const toDelete = `DELETE FROM tbl_students WHERE id = '${del_id}'`;

    conn.query(toDelete, (err)=>{
        if(err) throw err;
        
    res.send(`<script>
        alert('Data Deleted');
        location.href = '/view';
        </script>`
);
    })
})

app.listen(8000);

