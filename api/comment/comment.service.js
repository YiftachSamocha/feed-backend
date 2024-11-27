import { logger } from '../../services/logger.service.js'
import { dbService } from '../../services/db.service.js'

export const carService = {
	query,
	add,
}

async function query(filterBy = { txt: '' }) {
	try {
		const criteria = _buildCriteria(filterBy)
		const collection = await dbService.getCollection('car')
		var carCursor = await collection.find(criteria)
		const cars = carCursor.toArray()
		return cars
	} catch (err) {
		logger.error('cannot find cars', err)
		throw err
	}
}


async function add(car) {
	try {
		const collection = await dbService.getCollection('car')
		await collection.insertOne(car)
		return car
	} catch (err) {
		logger.error('cannot insert car', err)
		throw err
	}
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