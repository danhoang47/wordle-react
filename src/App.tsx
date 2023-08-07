import {
	GameSettingContextProvider
} from "./core/contexts";
import Home from "@/pages/home";
import { DefaultLayout } from "@/layouts";
import "./styles/global.scss";

function App() {
	return (
		<GameSettingContextProvider>
			<DefaultLayout>
				<Home />
			</DefaultLayout>
		</GameSettingContextProvider>
	);
}

export default App;
