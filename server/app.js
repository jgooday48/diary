const express = require('express')
const cors = require('cors')
const logger = require('morgan')

//const postRoutes = require('./routers/posts')

const app = express()

app.use(express.json())
if (process.env.NODE_ENV !== "test") app.use(logger('dev'))
app.use(cors())

//app.use('/posts', postsRoutes)

app.get('/', (req, res) => {
    res.send({
        message: "welcome",
        description: "DIARY API",
        endpoints: [
            "GET    /            200",
            "GET    /posts       200",
            "GET    /posts/:id   200",
            "POST   /posts       201",
            "PATCH  /posts/:id   200",
            "DELETE /posts/:id   204",
        ]
    })
})

app.post('/', (req, res) => {
    res.status(405).send('Not allowed!')
});

module.exports = app
