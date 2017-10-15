import mongoose, {Schema} from 'mongoose';

const GroupSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: [5, 'Name must be five characters long']
    },
    description : {
        type : String,
        required: true,
        minLength: [5, 'Name must be five characters long']
    },
    category: {
        type: String
    },
    meetups : [{
        type: Schema.Types.ObjectId,
        ref: 'Meetup'
    }]

}, {timestamps: true})

/**
 * Create a meetup and adds it to the meetup array in the group
 */
GroupSchema.statics.addMeetups = async function (id, args) {
    const Meetup = mongoose.model('Meetup')

    // We added the group id to the meetup group element
    // Finally this is the author of the meetup
    
    const meetup = await new Meetup({ ...args, group: id})
 
    // We found the group with the id provided inthe url
    // And we push the meetup id in the meetup element

    const group = await this.findByIdAndUpdate(id, { $push : {meetups: meetup.id}})
 
    return {
        meetup: await meetup.save(),
        group
    }
}

export default mongoose.model('Group', GroupSchema)