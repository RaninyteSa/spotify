mysql.createConnection({
    host: 'pauliuspetrunin.lt',
    user: 'bit',
    password: 'kulokas',
    database:'Sandra'
})

const port = process.env.port || 3000

app.listen(port)