/**
 * App Entrypoint
 */
import config from './server-config.js'
import { connectDB } from './db.js'
import app from './express.js'
import express from 'express'

console.log( 'Starting server...' )
console.log( `STAGE=${config.stage}` )
console.log( `NODE_ENV=${config.env}` )

if ( 'STAGE' in process.env ) {
    const hasMongoConf = process.env.JWT_SECRET && process.env.MONGO_URI

    if ( config.stage === 'PRODUCTION' && ! hasMongoConf ) {
        console.log( '\nSERVER FAILED TO START' )
        console.log( '\nServer is set to PRODUCTION but is missing configuration variables for JWT_SECRET and/or MONGO_URI.' )
    }
    else {
        main()
    }
}
else {
    console.log( '\nSERVER DID NOT START' )
    console.log( '\nThe server has not been configured yet.\n' )
    console.log( 'In production mode, add NODE_ENV, STAGE, JWT_SECRET and MONGO_URI.' )
    console.log( 'In development mode, STAGE=development is required, others are optional.' )
}

async function main() {
    app.use( express.json() )

    await connectDB()

    // app.get( '/', ( req, res ) => {
    //     res.json( { message: 'Welcome to this application.' } )
    // } )

    app.listen( config.port, ( err ) => {
        if ( err ) {
            console.log( err )
        }
        console.info( 'Server started on port %s.', config.port )
    } )
}
