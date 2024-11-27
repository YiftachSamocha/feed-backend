import express from 'express'

import { getComments, addComment, } from './comment.controller.js'

const router = express.Router()

// We can add a middleware for the entire router:
// router.use(requireAuth)

router.get('/', getComments)
router.post('/', addComment)

export const commentRoutes = router