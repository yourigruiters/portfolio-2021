import * as React from "react";
import styled from "@emotion/styled";
import { ThemeType } from "styles/theme";

const Container = styled.div`
	background-color: green;
`;

const Button = styled.button`
	background-color: pink;
	padding: 20px;
`;

type Props = {
	setTheme: (theme: ThemeType) => void;
	theme: ThemeType;
};

const HomeView: React.FC<Props> = ({ setTheme, theme }) => {
	const testing = "Toggle Theme";
	return (
		<Container>
			<Button
				onClick={
					theme === "light" ? () => setTheme("dark") : () => setTheme("light")
				}
			>
				{testing}
			</Button>
		</Container>
	);
};

export default HomeView;
