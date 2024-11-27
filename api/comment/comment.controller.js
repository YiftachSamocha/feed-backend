import { logger } from '../../services/logger.service.js'
import { commentService } from './comment.service.js'

export async function getComments(req, res) {
	try {
		const filterBy = {
			txt: req.query.txt || '',
		}
		const comments = await commentService.query(filterBy)
		res.json(comments)
	} catch (err) {
		logger.error('Failed to get comments', err)
		res.status(400).send({ err: 'Failed to get comments' })
	}
}


export async function addComment(req, res) {
	const { body: comment } = req

	try {
		const addedComment = await commentService.add(comment)
		res.json(addedComment)
	} catch (err) {
		logger.error('Failed to add comment', err)
		res.status(400).send({ err: 'Failed to add comment' })
	}
}

