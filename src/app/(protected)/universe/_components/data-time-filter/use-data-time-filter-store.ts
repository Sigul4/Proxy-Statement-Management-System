import { create } from "zustand"

interface DataTimeFilterStore {
	isOpen: boolean
	dataRange: {
		from: Date | undefined
		to?: Date | undefined
	}
	setIsOpen: (isOpen: boolean) => void
	setDataRange: (from: Date | undefined, to?: Date | undefined) => void
}

export const useDataTimeFilterStore = create<DataTimeFilterStore>()(set => ({
	isOpen: false,
	dataRange: {
		from: new Date(2024, 2, 2),
		to: new Date(2024, 4, 2)
	},
	setIsOpen: isOpen => set({ isOpen }),
	setDataRange: (from, to) => set({ dataRange: { from, to } })
}))
