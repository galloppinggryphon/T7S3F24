// user.controller.js
import User from '../models/user.model.js'
// import errorHandler from './error.controller.js'

export const getUsers = async( req, res ) => {
    const { email } = req.query
    const query = {}

    if ( email ) {
        query.email = email
    }

    // Exclude hashed_password and salt
    const users = User.find( query ).select( [ '-hashed_password', '-salt' ] )
    const results = await users
    res.json( results )
}

export const getUserByID = async( req, res, next, id ) => {
    // Exclude hashed_password and salt
    // const user = User.findById( req.params.userid )

    // TODO: Exclude hashed_password and salt from results
    // This works once, then crashes
    const user = User.findById( req.params.userid ).select( [ '-hashed_password', '-salt' ] )

    console.log( 'Get user:', id )
    const results = await user

    if ( ! results ) {
        return res.status( 404 ).json( { message: 'User not found' } )
    }

    req.user = results
    next()
}

export const read = ( req, res ) => {
    // req.profile.hashed_password = undefined;
    // req.profile.salt = undefined;
    return res.json( req.user )
}

export const createUser = async( req, res ) => {
    const user = new User( req.body )

    try {
        await user.save()
        return res.status( 200 ).json( {
            message: 'Successfully signed up!',
        } )
    }
    catch ( error ) {
        console.log( error )
        console.log( 'user-reached controller- Unsuccessful' )
        res.status( 500 ).json( { error: error.message } )
    }
}
export const updateUser = async( req, res ) => {
    console.log( 'updateUser', req.params.userid, req.body )

    const user = await User.findByIdAndUpdate( req.params.userid, req.body, {
        new: true,
    } )
    if ( ! user ) {
        return res.status( 404 ).json( { message: 'User not found' } )
    }
    res.json( user )
}

export const deleteUser = async( req, res ) => {
    const user = await User.findByIdAndDelete( req.params.userid )
    if ( ! user ) {
        return res.status( 404 ).json( { message: 'User not found' } )
    }
    res.json( user )
}
