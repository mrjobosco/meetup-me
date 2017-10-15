import mongoose, { Schema } from 'mongoose'

const MeetupSchema = new Schema({
    title: {
        type : String,
        required: true,
        minLength: [5, '5 characters long at leaast']
    },
    description: {
        type: String,
        required: true,
        minLength: [10, '10 characters long at leaast']
        
    },
    eventDate : {
        type: Date
    },
    group : {
        type: Schema.Types.ObjectId,
        ref: 'Group'
    }
}, {timestamps : true})

export default mongoose.model('Meetup', MeetupSchema)
