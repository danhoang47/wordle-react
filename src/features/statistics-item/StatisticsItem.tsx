import { faChartSimple } from "@fortawesome/free-solid-svg-icons";

import { IconButton } from "@/core/components";

function StatisticsItem() {
    return (  
        <IconButton
			onClick={() => {}}
			label="Statistics button"
			icon={faChartSimple}
			size="xl"
		/>
    );
}

export default StatisticsItem;