import  { useState, useEffect } from 'react';

const apiUrl = 'https://raw.githubusercontent.com/edisonAlbaSarmiento/Landing-Resume-Design/master/data-curriculum-vitae/data.json';

const UserGetData =  () => {
    const [myData, setData] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => setData(data))
    }, [])

    return myData;
}

export default UserGetData;