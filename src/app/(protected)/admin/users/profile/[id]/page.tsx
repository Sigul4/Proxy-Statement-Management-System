"use client"

import { getUser, updateUser, UserProfileData } from "@/app/api/auth/[...nextauth]/user/user.service"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { CheckIcon, Pencil1Icon } from "@radix-ui/react-icons"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import SensitiveField from "./__components/sensetive-field"

export default function UserDetailsPage() {
	const router = useRouter()
	const params = useParams()
	const [userData, setUserData] = useState<UserProfileData | null>(null)
	const [loading, setLoading] = useState(true)
	const [editMode, setEditMode] = useState<Record<string, boolean>>({})
	const [editedValues, setEditedValues] = useState<Partial<UserProfileData>>({})

	useEffect(() => {
		const fetchUserData = async () => {
			if (params.id && !Array.isArray(params.id)) {
				try {
					const user = await getUser(params.id)
					setUserData(user)
					setEditedValues(user || {})
				} catch (error) {
					console.error("Error fetching user data:", error)
				} finally {
					setLoading(false)
				}
			}
		}
		fetchUserData()
	}, [params.id])

	const handleEdit = (field: keyof UserProfileData) => {
		setEditMode(prev => ({ ...prev, [field]: true }))
	}

	const handleSave = async (field: keyof UserProfileData) => {
		if (userData) {
			try {
				const updatedUser = await updateUser(userData.id, { [field]: editedValues[field] })
				setUserData(updatedUser)
				setEditMode(prev => ({ ...prev, [field]: false }))
			} catch (error) {
				console.error("Error updating user:", error)
			}
		}
	}

	const handleInputChange = (field: keyof UserProfileData, value: string) => {
		setEditedValues(prev => ({ ...prev, [field]: value }))
	}

	const handleConfirmedAccessChange = async (checked: boolean) => {
		if (userData) {
			try {
				const updatedUser = await updateUser(userData.id, { confirmed_access: checked })
				setUserData(updatedUser)
			} catch (error) {
				console.error("Error updating confirmed access:", error)
			}
		}
	}

	if (loading) {
		return <div>Loading...</div>
	}

	if (!userData) {
		return <div>User not found</div>
	}

	const renderEditableField = (label: string, field: keyof UserProfileData) => (
		<div className="mb-4 flex items-center">
			<span className="font-semibold">{label}: </span>
			{editMode[field] ? (
				<>
					<Input
						value={editedValues[field] as string}
						onChange={e => handleInputChange(field, e.target.value)}
						className="inline-block w-auto"
					/>
					<button onClick={() => handleSave(field)} className="ml-2">
						<CheckIcon />
					</button>
				</>
			) : (
				<>
					{userData[field]}
					<button onClick={() => handleEdit(field)} className="ml-2">
						<Pencil1Icon />
					</button>
				</>
			)}
		</div>
	)

	return (
		<div className="min-h-screen">
			<div>
				<button onClick={() => router.back()} className="mb-6">
					Back to Members
				</button>

				<div className="border-slate-150 mb-8 rounded-lg border-2 bg-white p-8 outline-offset-0">
					<div className="mb-8 flex items-center gap-10">
						<img
							className="h-[50px] w-[50px] rounded-full"
							src={`https://api.dicebear.com/6.x/initials/svg?seed=${userData.firstName} ${userData.lastName}`}
							alt={`${userData.firstName} ${userData.lastName}`}
						/>
						<div>
							{renderEditableField("First Name", "firstName")}
							{renderEditableField("Last Name", "lastName")}
							<Badge className="text-lg">{userData.role}</Badge>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div className="rounded-lg border-2 border-slate-100 bg-white p-6 text-sm">
							<h2 className="mb-4 font-semibold">User Information</h2>
							<SensitiveField label="Email" value={userData.email} />
							<SensitiveField label="User ID" value={userData.id} />
							{renderEditableField("Phone Number", "phoneNumber")}
						</div>

						<div className="rounded-lg border-2 border-slate-100 bg-white p-6 text-sm">
							<h2 className="mb-4 font-semibold">Company Information</h2>
							{renderEditableField("Company", "company")}
							{renderEditableField("Role", "role")}
						</div>
					</div>
				</div>

				<div className="border-slate-150 mb-8 rounded-lg border-2 bg-white p-8 outline-offset-0">
					<h2 className="mb-4 text-xl font-semibold">Account Status</h2>
					<div className="mb-4 flex items-center">
						<span className="mr-2 font-semibold">Confirmed Access: </span>
						<Checkbox
							checked={userData.confirmed_access}
							onCheckedChange={handleConfirmedAccessChange}
							id="confirmed-access"
						/>
						<label htmlFor="confirmed-access" className="ml-2">
							{userData.confirmed_access ? "Yes" : "No"}
						</label>
					</div>
				</div>
			</div>
		</div>
	)
}
