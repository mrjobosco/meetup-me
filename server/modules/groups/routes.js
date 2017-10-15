import * as GroupController from './controller'

import {Router} from 'express'

const routes = new Router()

routes.post('/groups/new', GroupController.createGroup)
routes.post('/groups/:groupId/meetups/new', GroupController.createGroupMeetup)

export default routes