import * as MeetupController from './controller'

import {Router} from 'express'

const routes  = new Router()

routes.post('/meetups', MeetupController.createMeetups)
routes.get('/meetups', MeetupController.getAllMeetUps)

export default routes