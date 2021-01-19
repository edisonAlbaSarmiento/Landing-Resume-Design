/* eslint-disable react/jsx-filename-extension */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {
  Title,
  Container,
  ContainerHeader,
  Line,
  ContainerCards,
  ContainerChildren,
  ContainerTitle,
  ImageContainer,
  ContainerDescription,
  ContainerText,
  TextPrimary,
  TextSecond,
  TextThree,
  ContainerModal
} from './styles';
import CustomizedDialogs from '../modal';

const Modal = (index) => (
  <CustomizedDialogs
    itemId={index}
    title="edde"
    // activeButton={activeButton}
    // selectedLanguage={selectedLanguage}
    // onClickActive={() => changeState(index)}
  >
      DENTro

  </CustomizedDialogs>

)
function Lab({dataLabs, selectedLanguage}) {
  const [activeButton, setActivButton] = useState(false);
  const changeState = (item) => {
    console.log('item', item)
    setActivButton(!activeButton)
  }

  return (
    <Container>
      <ContainerHeader>
        <ContainerTitle>
          <Title>
            {selectedLanguage === 0 ? 'Labs': 'Laboratorios'}
          </Title>
          <Line />
        </ContainerTitle>
      </ContainerHeader>
      <ContainerCards>
        {dataLabs && dataLabs.map((item, index) => (
          <ContainerChildren onClick={() => changeState(item)}>
            {console.log('index', index)}

            <ContainerDescription>
              <ImageContainer src={`${item.imageLabs}`} />
              <ContainerText>
                <TextPrimary>
                  {item.title}
                </TextPrimary>
                <TextSecond>
                  {item.description}
                </TextSecond>
                {/*
                                  <ContainerModal>

                   <TextThree>

                    {selectedLanguage === 0 ? 'View More': 'Ver más'}
                    <ArrowForwardIosIcon style={{ fontSize: 10 }} />
                  </TextThree>
                                  </ContainerModal>

                  */}

                <modal/>
              </ContainerText>

            </ContainerDescription>
          </ContainerChildren >
        ))}

      </ContainerCards>
    </Container>
  );
}

Lab.propTypes = {
  dataLabs: PropTypes.objectOf.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
}

export default Lab;
