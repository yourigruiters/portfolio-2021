import * as React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
	background-color: red;
`;

const HomeView = () => {
	const testing = "Youri Gruiters";
	return <Container>{testing}</Container>;
};

export default HomeView;
