import { create, get, list, remove, update } from "../dynamodb.service"

const tableName = "users"

export interface UserProfileData {
	id: string
	firstName: string
	lastName: string
	company: string
	role: string
	phoneNumber: string
	email: string
	confirmed_access: boolean
}

export async function createUser(user: UserProfileData) {
	return create(tableName, user)
}

export async function getUser(id: string) {
	return get<UserProfileData>(tableName, id)
}

export async function updateUser(id: string, updates: Partial<UserProfileData>) {
	return update<UserProfileData>(tableName, id, updates)
}

export async function deleteUser(id: string) {
	return remove(tableName, id)
}

export async function listUsers() {
	return list<UserProfileData>(tableName)
}

export async function handleCompleteProfile(userData: UserProfileData) {
	try {
		const existingUser = await getUser(userData.id)
		if (existingUser) {
			const updatedUser = await updateUser(userData.id, userData)
			console.log(`User profile updated: ${userData.id}`)
			return updatedUser
		} else {
			const newUser = await createUser(userData)
			console.log(`New user profile created: ${userData.id}`)
			return newUser
		}
	} catch (error) {
		console.error(`Error handling profile completion for user ${userData.id}:`, error)
		throw error
	}
}

export async function handler(event: any) {
	try {
		const { action, userData } = event

		switch (action) {
			case "create":
				return await createUser(userData)
			case "get":
				return await getUser(userData.id)
			case "update":
				return await updateUser(userData.id, userData)
			case "delete":
				return await deleteUser(userData.id)
			case "list":
				return await listUsers()
			case "completeProfile":
				return await handleCompleteProfile(userData)
			default:
				throw new Error(`Unsupported action: ${action}`)
		}
	} catch (error) {
		console.error("Error in handler:", error)
		throw error
	}
}
