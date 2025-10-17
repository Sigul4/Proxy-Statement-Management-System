import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import {
	BatchWriteCommand,
	DeleteCommand,
	DynamoDBDocument,
	GetCommand,
	PutCommand,
	ScanCommand,
	UpdateCommand
} from "@aws-sdk/lib-dynamodb"

const dbClient = new DynamoDBClient({
	region: "eu-north-1",
	credentials: {
		accessKeyId: process.env.NEXT_PUBLIC_API_AWS_ACCESS_KEY_ID as string,
		secretAccessKey: process.env.NEXT_PUBLIC_API_AWS_SECRET_ACCESS_KEY as string
	}
})

const docClient = DynamoDBDocument.from(dbClient)

export async function create<T extends { id: string }>(tableName: string, item: T) {
	const putCommand = new PutCommand({
		TableName: tableName,
		Item: item
	})

	try {
		await docClient.send(putCommand)
		console.log(`Item created successfully: ${item.id}`)
		return item
	} catch (error) {
		console.error(`Error creating item ${item.id}:`, error)
		throw error
	}
}

export async function get<T>(tableName: string, id: string) {
	const getCommand = new GetCommand({
		TableName: tableName,
		Key: { id }
	})

	try {
		const response = await docClient.send(getCommand)
		if (response.Item) {
			return response.Item as T
		} else {
			return null
		}
	} catch (error) {
		console.error(`Error retrieving item ${id}:`, error)
		throw error
	}
}

export async function update<T>(tableName: string, id: string, updates: Partial<T>) {
	const updateExpression =
		"set " +
		Object.keys(updates)
			.map(key => `#${key} = :${key}`)
			.join(", ")
	const expressionAttributeNames = Object.keys(updates).reduce((acc, key) => ({ ...acc, [`#${key}`]: key }), {})
	const expressionAttributeValues = Object.entries(updates).reduce(
		(acc, [key, value]) => ({ ...acc, [`:${key}`]: value }),
		{}
	)

	const updateCommand = new UpdateCommand({
		TableName: tableName,
		Key: { id },
		UpdateExpression: updateExpression,
		ExpressionAttributeNames: expressionAttributeNames,
		ExpressionAttributeValues: expressionAttributeValues,
		ReturnValues: "ALL_NEW"
	})

	try {
		const response = await docClient.send(updateCommand)
		console.log(`Item updated successfully: ${id}`)
		return response.Attributes as T
	} catch (error) {
		console.error(`Error updating item ${id}:`, error)
		throw error
	}
}

export async function remove(tableName: string, id: string) {
	const deleteCommand = new DeleteCommand({
		TableName: tableName,
		Key: { id }
	})

	try {
		await docClient.send(deleteCommand)
		console.log(`Item deleted successfully: ${id}`)
		return true
	} catch (error) {
		console.error(`Error deleting item ${id}:`, error)
		throw error
	}
}

export async function list<T>(tableName: string) {
	const scanCommand = new ScanCommand({
		TableName: tableName
	})

	try {
		const response = await docClient.send(scanCommand)
		console.log(`Retrieved ${response.Items?.length} items successfully`)
		return response.Items as T[]
	} catch (error) {
		console.error("Error retrieving items:", error)
		throw error
	}
}

export async function batchWrite(tableName: string, items: any[]) {
	const params = {
		RequestItems: {
			[tableName]: items.map(item => ({
				PutRequest: {
					Item: item
				}
			}))
		}
	}

	try {
		const command = new BatchWriteCommand(params)
		await docClient.send(command)
	} catch (error) {
		console.error("Error in batchWrite:", error)
		throw error
	}
}
