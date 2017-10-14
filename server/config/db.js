import mongoose from 'mongoose'

export default () => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://heroku_zn9jzq8q:Abc123cd@ds137207.mlab.com:37207/meetupME')
    mongoose.connection
    .once('open', () => console.log('mongoDB Running'))
    .on('error', (err)=>{
        console.log(`${err}`)
    })
}