import mongoose from 'mongoose'

export default () => {
    mongoose.Promise = global.Promise;
    //mongoose.connect('mongodb://localhost:27017/meetupME')
    mongoose.connect('mongodb://test:test@ds137207.mlab.com:37207/heroku_zn9jzq8q')
    mongoose.connection    
    .once('open', () => console.log('mongoDB Running'))
    .on('error', (err)=>{
        console.log(`${err}`)
    })
}