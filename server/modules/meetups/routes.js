import * as MeetupController from './controller'

import {Router} from 'express'

const routes  = new Router()

routes.post('/meetups', MeetupController.createMeetups)
routes.get('/getmeetups', MeetupController.getAllMeetUps)

export default routes