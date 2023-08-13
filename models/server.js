
const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app  = express ()
        this.port = process.env.PORT
        this.userPath = '/api/users'

        // Middleware

        this.middleware();

        //routes
        this.routes();
    }



    middleware () {

        this.app.use( express.static('public'))

        this.app.use(cors())
    }

    routes(){

        this.app.use(this.userPath, require('../routes/user'))

    }

    listen() {
        this.app.listen(  this.port, () => {
            console.log('Server running on the port',  this.port)
        })
    }


}

module.exports = Server ;