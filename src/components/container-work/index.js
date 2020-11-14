/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Share from '@material-ui/icons/Share';
import Search from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CloseIcon from '@material-ui/icons/Close';
import {
  Title,
  Container,
  ContainerHeader,
  Line,
  ContainerCards,
  ContainerChildren,
  ContainerTitle,
  ContainerIcons,
  ImageContainer,
  TextImage,
  LinkShare,
  InputFilter,
  ContainerText,
} from './styles';

function Work({dataWork, selectedLanguage}) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [activeInput, setActiveInput] = React.useState(false);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    console.log('HOLA')
    async function getData(){
      const results = await dataWork.filter(item =>
        item.description.toLowerCase().includes(searchTerm)
      );
      console.log('results',results)

      setSearchResults(results);
    }
    getData()
    // eslint-disable-next-line
  }, [searchTerm]);

  console.log('dataWork',dataWork)

  console.log('selectedLanguage',selectedLanguage)
  return (
    <Container>
      <ContainerHeader>
        <ContainerTitle>
          <Title>
            {selectedLanguage === 0 ? 'Work': 'Trabajo'}
          </Title>
          <Line />
        </ContainerTitle>
        <ContainerIcons>
          <Tooltip title={selectedLanguage === 0 ? 'Share via Whatsapp' : 'Compartir por Whatsapp'} arrow>
            <IconButton>
              <LinkShare target="_blank" href="https://api.whatsapp.com/send?text=Ver mi pagina https://edisonalbasarmiento.github.io/Landing-Resume-Design/" data-action="share/whatsapp/share">
                <Share />
              </LinkShare>
            </IconButton>
          </Tooltip>
          {activeInput && (
            <InputFilter
              type="text"
              placeholder={selectedLanguage === 0 ? 'Search': 'Buscar'}
              value={searchTerm}
              onChange={handleChange}
            />
          )}

          <IconButton style={{color: 'white'}}>
            <LinkShare onClick={() => setActiveInput(!activeInput)}>
              {activeInput ? <CloseIcon/> : <Search />}
            </LinkShare>
          </IconButton>
        </ContainerIcons>
      </ContainerHeader>
      <ContainerCards>
        {searchResults.length > 0 ?
          searchResults.map(item => (
            <ContainerChildren onClick={() => {window.open(`${item.urlWork}`)}}>
              <ImageContainer src={`${item.imageWork}`} />
              <ContainerText>
                <TextImage>
                  {item.description}
                </TextImage>
              </ContainerText>

            </ContainerChildren>
          ))
          :
          <TextImage>
            {selectedLanguage === 0 ? 'Without results': 'Sin resultados'}
          </TextImage>
        }
      </ContainerCards>
    </Container>
  );
}

Work.propTypes = {
  dataWork: PropTypes.objectOf.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
}

export default Work;
