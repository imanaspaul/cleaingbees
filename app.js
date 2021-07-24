const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (_, res) => 
    res.json({
        message: 'We will be live soon!!!!!  🚀 🚀 🚀 🚀 🚀'
    })
)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))