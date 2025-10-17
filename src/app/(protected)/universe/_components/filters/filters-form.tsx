import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useUniverseFiltersStore } from "../../_store/use-universe-filters-store"
import { FilingTypeFilter } from "../../types"
import { FiltersCollapsible } from "./filters-collapsible"
import { FiltersSeparator } from "./filters-separator"

const FILLING_TYPE_FILTERS: {
	label: string
	value: FilingTypeFilter
}[] = [
	{
		label: "13D",
		value: "13D"
	},
	{
		label: "13G",
		value: "13G"
	},
	{
		label: "Hybrid",
		value: "Hybrid"
	}
]

const GEOGRAPHY_FILTERS: {
	label: string
	value: "us" | "canada" | "uk" | "germany" | "france" | "japan" | "korea" | "australia"
}[] = [
	{
		label: "US",
		value: "us"
	},
	{
		label: "Canada",
		value: "canada"
	},
	{
		label: "UK",
		value: "uk"
	},
	{
		label: "Germany",
		value: "germany"
	},
	{
		label: "France",
		value: "france"
	},
	{
		label: "Japan",
		value: "japan"
	},
	{
		label: "Korea",
		value: "korea"
	},
	{
		label: "Australia",
		value: "australia"
	}
]

const PERIOD_FILTERS: {
	label: string
	value: "30d" | "180d" | "ytd" | "1y" | "5y" | "10y" | "20y" | "all" | "custom"
}[] = [
	{
		label: "30 days",
		value: "30d"
	},
	{
		label: "180 days",
		value: "180d"
	},
	{
		label: "YTD",
		value: "ytd"
	},
	{
		label: "1 year",
		value: "1y"
	},
	{
		label: "5 year",
		value: "5y"
	},
	{
		label: "10 year",
		value: "10y"
	},
	{
		label: "20 year",
		value: "20y"
	},
	{
		label: "All",
		value: "all"
	},
	{
		label: "Custom",
		value: "custom"
	}
]

const formSchema = z.object({
	filingType: z.enum(["13D", "13G", "Hybrid"]).nullable(),
	geography: z.array(z.enum(["us", "canada", "uk", "germany", "france", "japan", "korea", "australia"])),
	period: z.enum(["30d", "180d", "ytd", "1y", "5y", "10y", "20y", "all", "custom"])
})

export default function FiltersForm() {
	const setIsOpen = useUniverseFiltersStore(state => state.setIsOpen)
	const setFilters = useUniverseFiltersStore(state => state.setFilters)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			filingType: null,
			geography: [],
			period: "all"
		}
	})

	function handleSubmit(values: z.infer<typeof formSchema>) {
		// setFilters({
		// 	filingType: values.filingType,
		// 	geography: values.geography,
		// 	period: values.period
		// })
		setIsOpen(false)
	}

	function handleReset() {
		form.reset()
	}

	function handleSelectFillingType(value: FilingTypeFilter | null) {
		if (form.getValues("filingType") === value) {
			form.setValue("filingType", null)
			return
		}
		form.setValue("filingType", value)
	}

	const filingType = form.watch("filingType")

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleSubmit)} onReset={handleReset}>
				<div className="flex flex-col gap-4">
					<FiltersCollapsible title="Filing type" defaultOpen>
						<div className="mt-5 flex flex-wrap gap-2">
							{FILLING_TYPE_FILTERS.map(filter => (
								<button
									key={filter.value}
									className={cn("h-8 rounded-lg px-4 text-xs", {
										"bg-[#3A5A66] text-white hover:bg-[#446a77]": filingType === filter.value,
										"bg-[#F1F1F5] text-[#1B1B1B] hover:bg-neutral-200": filingType !== filter.value
									})}
									type="button"
									onClick={() => handleSelectFillingType(filter.value as FilingTypeFilter)}
								>
									{filter.label}
								</button>
							))}
						</div>
					</FiltersCollapsible>
					<FiltersSeparator />
					<FiltersCollapsible title="Geography" defaultOpen>
						<FormField
							control={form.control}
							name="geography"
							render={() => (
								<FormItem className="pt-4">
									{GEOGRAPHY_FILTERS.map(item => (
										<FormField
											key={item.value}
											control={form.control}
											name="geography"
											render={({ field }) => {
												return (
													<FormItem key={item.value} className="flex flex-row items-start space-x-3 space-y-0">
														<FormControl>
															<Checkbox
																checked={field.value?.includes(item.value)}
																onCheckedChange={checked => {
																	return checked
																		? field.onChange([...field.value, item.value])
																		: field.onChange(field.value?.filter(value => value !== item.value))
																}}
															/>
														</FormControl>
														<FormLabel className="text-sm font-normal leading-5 tracking-[0.48px] text-[#1B1B1B]">
															{item.label}
														</FormLabel>
													</FormItem>
												)
											}}
										/>
									))}
									<FormMessage />
								</FormItem>
							)}
						/>
					</FiltersCollapsible>
					<FiltersSeparator />
					<FiltersCollapsible title="Period" defaultOpen>
						<FormField
							control={form.control}
							name="period"
							render={({ field }) => (
								<FormItem className="space-y-3 pt-4">
									<FormControl>
										<RadioGroup
											onValueChange={field.onChange}
											defaultChecked={field.value === "all"}
											className="flex flex-col space-y-1"
										>
											{PERIOD_FILTERS.map(item => (
												<FormItem key={item.value} className="flex items-center space-x-3 space-y-0">
													<FormControl>
														<RadioGroupItem value={item.value} />
													</FormControl>
													<FormLabel className="text-sm font-normal leading-5 tracking-[0.48px] text-[#1B1B1B]">
														{item.label}
													</FormLabel>
												</FormItem>
											))}
										</RadioGroup>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</FiltersCollapsible>
					<FiltersSeparator />
					<FiltersCollapsible title="Activist type">
						<div>Activist type content</div>
					</FiltersCollapsible>
					<FiltersSeparator />
					<FiltersCollapsible title="Activist name">
						<div>Activist type content</div>
					</FiltersCollapsible>
					<FiltersSeparator />
					<FiltersCollapsible title="Focus">
						<div>Activist type content</div>
					</FiltersCollapsible>
					<FiltersSeparator />
					<FiltersCollapsible title="Target sector">
						<div>Activist type content</div>
					</FiltersCollapsible>
					<FiltersSeparator />
					<FiltersCollapsible title="Target Market Cap">
						<div>Activist type content</div>
					</FiltersCollapsible>
					<FiltersSeparator />
					<FiltersCollapsible title="Advisor">
						<div>Activist type content</div>
					</FiltersCollapsible>
				</div>
				<footer className="mt-8 flex justify-between gap-4">
					<button
						className="py-2 text-sm font-semibold tracking-[0.48px] text-black underline underline-offset-8"
						type="reset"
					>
						Clear all
					</button>
					<div className="flex gap-4">
						<button className="rounded-lg border border-[#3A5A66] bg-white px-5 py-2 text-sm font-semibold text-[#3A5A66]">
							Save
						</button>
						<button className="rounded-lg bg-[#3A5A66] px-5 py-2 text-sm font-semibold text-white">Apply</button>
					</div>
				</footer>
			</form>
		</Form>
	)
}
