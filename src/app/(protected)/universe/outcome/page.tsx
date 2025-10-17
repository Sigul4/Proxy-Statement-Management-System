import BoardRepresentationDemands from "./_components/board-representation-demands/board-representation-demands"
import BoardSetsWon from "./_components/board-sets-won/board-sets-won"
import InformationOutcome from "./_components/information-outcome"
import LongTermAbnormalReturnByCampaignOutcome from "./_components/long-term-abnormal-return-by-campaign-outcome/long-term-abnormal-return-by-campaign-outcome"
import Outcomes from "./_components/outcomes/outcomes"
import ProxyContestResult from "./_components/proxy-contest-result/proxy-contest-result"

export default function UniverseOutcomePage() {
	return (
		<div className="flex flex-col gap-8">
			<InformationOutcome />
			<Outcomes />
			<ProxyContestResult />
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
				<BoardRepresentationDemands />
				<BoardSetsWon />
			</div>
			<LongTermAbnormalReturnByCampaignOutcome />
		</div>
	)
}
