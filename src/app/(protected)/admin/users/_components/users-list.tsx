"use client"

import { deleteUser, listUsers, UserProfileData } from "@/app/api/auth/[...nextauth]/user/user.service"
import Button from "@/app/auth/_components/button"
import { cn } from "@/lib/utils"
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"

export function UserList() {
	const [users, setUsers] = useState<UserProfileData[]>([])
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage, setItemsPerPage] = useState(10)
	const router = useRouter()

	useEffect(() => {
		fetchUsers()
	}, [])

	const fetchUsers = async () => {
		try {
			const fetchedUsers = await listUsers()
			setUsers(fetchedUsers)
		} catch (error) {
			console.error("Error fetching users:", error)
		}
	}

	const handleDelete = async (id: string) => {
		try {
			await deleteUser(id)
			await fetchUsers()
		} catch (error) {
			console.error("Error deleting user:", error)
		}
	}

	const handleOpenDetails = async (id: string) => {
		router.push(`users/profile/${id}`)
	}

	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem)

	return (
		<>
			<div className="relative">
				<div className="w-full overflow-x-auto pb-2">
					<table className="w-full gap-8">
						<thead className="text-[#777]">
							<tr>
								<th className="py-3 text-start text-megamicro font-normal">Name</th>
								<th className="text-start text-megamicro font-normal">Email</th>
								<th className="text-start text-megamicro font-normal">Company</th>
								<th className="text-start text-megamicro font-normal">Role</th>
								<th></th>
							</tr>
						</thead>
						<tbody className="text-micro font-normal tracking-wide text-[#1B1B1B]">
							{currentUsers.map(user => (
								<tr key={user.id} className="gap-5 border-b first-of-type:border-t">
									<TableTd>
										<div className="flex flex-row items-center gap-5">
											<img
												className="h-[50px] w-[50px] rounded-full"
												src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.firstName} ${user.lastName}`}
												alt={`${user.firstName} ${user.lastName}`}
											/>
											<span>{`${user.firstName} ${user.lastName}`}</span>
										</div>
									</TableTd>
									<TableTd>{user.email}</TableTd>
									<TableTd>{user.company}</TableTd>
									<TableTd>{user.role}</TableTd>
									<TableTd>
										<div className="flex items-center justify-end gap-2">
											<Button
												variant="outline"
												className="aspect-square rounded-full p-2"
												onClick={() => handleOpenDetails(user.id)}
											>
												<Pencil1Icon />
											</Button>
											<Button
												variant="outline"
												className="aspect-square rounded-full p-2"
												onClick={() => handleDelete(user.id)}
											>
												<TrashIcon />
											</Button>
										</div>
									</TableTd>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<div className="flex w-full justify-between py-6 text-xs">
				<p className="text-xs text-[#1B1B1B]">
					Shown{" "}
					<span className="font-semibold">
						{indexOfFirstItem + 1}-{Math.min(indexOfLastItem, users.length)}
					</span>{" "}
					items
				</p>
				<div className="flex gap-2">
					<p className="mr-2">Total {Math.ceil(users.length / itemsPerPage)} pages</p>
					<span className="mr-1 font-semibold" onClick={() => setCurrentPage(1)}>
						{"<<"}
					</span>
					<span className="mr-1 font-semibold" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
						{"<"}
					</span>
					<div className="flex gap-2 text-[#999]">
						{[...Array(Math.min(7, Math.ceil(users.length / itemsPerPage)))].map((_, index) => (
							<span
								key={index}
								className={cn("cursor-pointer", currentPage === index + 1 ? "font-semibold text-[#1B1B1B]" : "")}
								onClick={() => setCurrentPage(index + 1)}
							>
								{index + 1}
							</span>
						))}
					</div>
					<span
						className="mr-1 font-semibold"
						onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(users.length / itemsPerPage)))}
					>
						{">"}
					</span>
					<span className="font-semibold" onClick={() => setCurrentPage(Math.ceil(users.length / itemsPerPage))}>
						{">>"}
					</span>
				</div>
				<p className="flex gap-2 text-xs text-[#1B1B1B]">
					Show by:
					<ul className="flex gap-2 font-normal">
						{[10, 20, 50, 100].map(num => (
							<li
								key={num}
								className={cn("cursor-pointer", itemsPerPage === num ? "font-semibold" : "text-[#999]")}
								onClick={() => setItemsPerPage(num)}
							>
								{num}
							</li>
						))}
					</ul>
				</p>
			</div>
		</>
	)
}

function TableTd({ className, children }: { className?: string; children: React.ReactNode }) {
	return <td className={cn("px-3 py-3", className)}>{children}</td>
}
