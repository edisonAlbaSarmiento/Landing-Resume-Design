import { useState, useEffect } from "react";

const apiUrl =
  "https://raw.githubusercontent.com/edisonAlbaSarmiento/Landing-Resume-Design/master/data-curriculum-vitae/data.json";

const UserGetData = () => {
  const [myData, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setErrorMessage(error.message));
  }, []);

  return { myData, errorMessage };
};

export default UserGetData;
