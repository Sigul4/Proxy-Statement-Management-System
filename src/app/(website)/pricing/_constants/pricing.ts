export const pricings = [
	{
		name: "Core",
		price: 695,
		pricingPeriods: ["monthly", "annual"],
		features: [
			{
				title: "Scan the Universe of Hedge Fund Activism",
				description: "Access 30 years of US campaigns from SEC filings"
			},
			{
				title: "Stay on Top of Shareholder Activism Dynamics",
				description: "Receive daily data updates, alerts, and key highlights"
			},
			{
				title: "Contextualize Activism Trends",
				description: "Leverage robust market data and company fundamentals"
			},
			{
				title: "Comprehensive Insights",
				description: "Understand the performance and characteristics of activist campaigns"
			},
			{
				title: "Portfolio Tracking",
				description: "Monitor activist portfolios, common holdings, changes, and more"
			},
			{
				title: "Trend Analysis",
				description: "Identify trends and anomalies to stay ahead of the curve"
			},
			{
				title: "Campaign Analysis",
				description: "Get in-depth analysis of fund activities and their impact on returns"
			},
			{
				title: "Vulnerability Measurement",
				description: "Assess the vulnerability of public companies to shareholder activism"
			}
		]
	},
	{
		name: "Enhanced",
		price: 9.99,
		pricingPeriods: ["annual"],
		features: [
			{
				title: "Enhanced Data Access",
				description: "Everything in the Core Plan plus expanded access to detailed tables based on our master datasets"
			},
			{
				title: "Focused Analysis",
				description:
					"Detailed profiling of campaigns, activists, and target companies, providing deeper insights into the areas you want to closely monitor"
			},
			{
				title: "Follow Key Activists, Campaigns, and Targets",
				description: "Utilize the wishlist function to track and monitor"
			},
			{
				title: "Early Feature Access",
				description: "Get early access to new analytical tools and features"
			}
		]
	},
	{
		name: "Enterprise",
		price: null,
		pricingPeriods: ["annual"],
		features: [
			{
				title: "All-Inclusive Data Access",
				description: "Everything in the Advanced Plan plus bulk data access and multiple user support"
			},
			{
				title: "Customized Solutions",
				description: "Tailored insights and dedicated support to meet your specific needs"
			},
			{
				title: "Customer Success Services",
				description:
					"Personalized attention to ensure your team`s success in maximizing investment returns or shaping strategies around shareholder activism"
			}
		]
	}
]
export const policies = [
	{
		title: "General Policy",
		points: [
			{
				subTitle: "Cancellation Period",
				details: [
					"Subscribers can cancel their subscription at any time. However, subscriptions are automatically renewed at the end of each term unless canceled. To avoid being charged for the next billing cycle, cancellations must be made at least 30 days before the renewal date."
				]
			},
			{
				subTitle: "Refunds",
				details: [
					"Monthly subscriptions are non-refundable.",
					"Annual subscriptions may be eligible for a pro-rated refund if canceled within the first 30 days of the subscription period."
				]
			},
			{
				subTitle: "How to Cancel",
				details: [
					"Cancellations can be made through the account management page on our website or by contacting customer support via email. A confirmation email will be sent once the cancellation has been processed."
				]
			}
		]
	},
	{
		title: "Trial Policy",
		points: [
			{
				subTitle: "Trial Duration",
				details: ["The trial period for our service is 7 days, starting from the date of activation."]
			},
			{
				subTitle: "Access and Usage",
				details: [
					"During the trial period, users will have full access to all features of the selected plan. This includes data on shareholder activism, return and portfolio monitoring, comparison tools, benchmarking, proxy season history, etc.",
					"All downloads during the trial period will include watermarks."
				]
			},
			{
				subTitle: "Automatic Conversion",
				details: [
					"At the end of the trial period, the trial subscription will automatically convert to a paid subscription unless canceled at least 24 hours before the trial period ends.",
					"Users will be billed at the standard rate for the chosen plan (Enhanced) starting from the first day after the trial period."
				]
			},
			{
				subTitle: "Cancellation",
				details: [
					"Users can cancel their trial at any time during the trial period without incurring any charges.",
					"To cancel, users must visit the account management page or contact customer support via email. A confirmation email will be sent once the cancellation is processed."
				]
			},
			{
				subTitle: "No Obligation",
				details: [
					"There is no obligation to continue with a paid subscription after the trial period. If users do not wish to subscribe, they must ensure the cancellation is completed before the trial period ends to avoid any charges."
				]
			},
			{
				subTitle: "Multiple Trials",
				details: [
					"Only one trial period is permitted per user. Subsequent registrations for a trial period by the same user will not be honored."
				]
			},
			{
				subTitle: "Feedback",
				details: ["Users are encouraged to provide feedback during the trial period to help us improve our services."]
			}
		]
	}
]
