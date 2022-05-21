/* eslint-disable react/jsx-filename-extension */
import React from "react";
import PropTypes from "prop-types";
import Share from "@material-ui/icons/Share";
// import Search from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
// import CloseIcon from '@material-ui/icons/Close';
import { useParams } from "react-router-dom";
import {
  Title,
  Container,
  // ContainerHeader,
  Line,
  // ContainerCards,
  // ContainerChildren,
  ContainerTitle,
  // ContainerIcons,
  // ImageContainer,
  // TextImage,
  LinkShare,
  // InputFilter,
} from "./styles";

function ContainerDetail({ dataRouter, dataWork }) {
  // const [searchTerm, setSearchTerm] = React.useState("");
  // const [searchResults, setSearchResults] = React.useState([]);
  // const [activeInput, setActiveInput] = React.useState(false);

  // const handleChange = e => {
  //   setSearchTerm(e.target.value);
  // };
  // useEffect(() => {
  //   const results = dataWork.filter(item =>
  //     item.description.includes(searchTerm)
  //   );
  //   setSearchResults(results);
  //   // eslint-disable-next-line
  // }, [searchTerm]);
  console.log("dataWork dataWork", dataWork);
  const { id } = useParams();
  console.log("dataRouter slug", id);

  console.log("dataRouter DETAIL", dataRouter);
  const image = dataWork[parseInt(id, 10)];
  console.log("dataRouter image", image);

  return (
    <Container>
      <ContainerTitle>
        <Title>{image?.description}</Title>
        <Line />
      </ContainerTitle>
      <Tooltip title="Comparte via Whatsapp" arrow>
        <IconButton>
          <LinkShare
            target="_blank"
            href="https://api.whatsapp.com/send?text=Ver mi pagina https://edisonalbasarmiento.github.io/Landing-Resume-Design/"
            data-action="share/whatsapp/share"
          >
            <Share />
          </LinkShare>
        </IconButton>
      </Tooltip>
    </Container>
  );
}

ContainerDetail.propTypes = {
  dataWork: PropTypes.array,
  dataRouter: PropTypes.string,
};

export default ContainerDetail;
