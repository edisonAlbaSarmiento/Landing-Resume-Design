import { useState, useEffect } from "react";

const apiUrl =
	"https://raw.githubusercontent.com/edisonAlbaSarmiento/Landing-Resume-Design/master/data-curriculum-vitae/data.json";

const UserGetData = () => {
	const [myData, setMyData] = useState < Array > [];
	const [errorMessage, setErrorMessage] = useState < string > "";

	useEffect(() => {
		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => setMyData(data))
			.catch((error) => setErrorMessage(error.message));
	}, [setErrorMessage, setMyData]);

	return { myData, errorMessage };
};

export default UserGetData;
