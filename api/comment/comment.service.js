import { logger } from '../../services/logger.service.js'
import { dbService } from '../../services/db.service.js'

const emails = [
	"john.doe@example.com",
	"jane.smith@fakeemail.com",
	"test.user123@mailinator.com",
	"random.person@nomail.com",
	"hello.world@fakehost.com",
	"user.name@sampledomain.com",
	"mailbox123@tempmail.com",
	"test.account@notreal.com",
	"contact.me@demoemail.com",
	"info.request@mockmail.com",
	"support.agent@fakeinbox.com",
	"marketing.team@fakemailbox.com",
	"service.rep@dummymail.com",
	"no.reply@fakemailservice.com",
	"newsletter@fakesite.com"
]

const msgs = [
	"Hello! How are you today?",
	"This is a test message.",
	"Please reply to this email when you can.",
	"Looking forward to hearing from you!",
	"Thank you for your support.",
	"Let me know if you need anything.",
	"Have a great day ahead!",
	"Don't forget our meeting tomorrow.",
	"Can you send me the files?",
	"Here is the information you requested.",
	"I'm running late, but I'll be there soon.",
	"Congratulations on your achievement!",
	"Let's catch up sometime next week.",
	"Please review and get back to me.",
	"Thank you for your quick response."
]


export const commentService = {
	query,
	add,
}

async function query(filterBy = { txt: '' }) {
	try {
		const criteria = _buildCriteria(filterBy)
		const collection = await dbService.getCollection('comment')
		var commentCursor = await collection.find(criteria)
		const comments = commentCursor.toArray()
		return comments
	} catch (err) {
		logger.error('cannot find comments', err)
		throw err
	}
}


async function add(comment) {
	try {
		const collection = await dbService.getCollection('comment')
		await collection.insertOne(comment)
		return comment
	} catch (err) {
		logger.error('cannot insert comment', err)
		throw err
	}
}

async function createData() {
	

}



function _buildCriteria(filterBy) {
	const criteria = {
	}

	return criteria
}

function _buildSort(filterBy) {
	if (!filterBy.sortField) return {}
	return { [filterBy.sortField]: filterBy.sortDir }
}