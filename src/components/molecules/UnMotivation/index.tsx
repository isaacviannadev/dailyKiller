import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { frasesDesmotivacionais } from '../../../services/motivador';
import Button from '../../UI/Button';

const UnMotivationSC = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: ${theme.color.main[700]};
    position: relative;

    h1 {
      text-align: right;
      max-width: 70%;
      position: relative;
      padding: 20px 20px 30px 0;
    }

    h1::before {
      content: '"';
      position: absolute;
      top: -30px;
      left: 0;
      font-size: 12rem;
      z-index: -1;
      color: ${theme.color.background.darkest};
    }

    @media only screen and (max-width: ${theme.breakpoints.md}) {
      h1 {
        max-width: unset;
        padding: 20px 0 10px 50px;

        font-size: ${theme.fontsize['3xl']};
      }
    }
  `}
`;

const FraseOverlay = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    border-radius: 12px;
    z-index: 4;
    text-align: center;

    background: rgba(211, 187, 136, 0.25);
    box-shadow: 0 8px 32px 0 rgba(211, 187, 136, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);

    & small {
      display: block;
      text-align: center;
      margin-bottom: 8px;
      color: ${theme.color.main[900]};
      font-size: ${theme.fontsize.xs};
      font-weight: 400;
    }
  `}
`;

const UnMotivation = () => {
  const [showFrase, setShowFrase] = useState(false);

  const day = new Date().getDate() - 1;

  const handleShowFrase = () => {
    setShowFrase(!showFrase);
    localStorage.setItem(
      'showFrase',
      JSON.stringify({ showFrase: !showFrase, dia: day + 1 })
    );
  };

  const storageShowFrase = localStorage.getItem('showFrase');

  useEffect(() => {
    if (storageShowFrase) {
      const { showFrase: storageShowFraseValue, dia } =
        JSON.parse(storageShowFrase);
      if (day !== dia - 1) {
        localStorage.removeItem('showFrase');
        setShowFrase(false);
      }
      if (storageShowFraseValue) {
        setShowFrase(storageShowFraseValue);
      }
    } else {
      setShowFrase(false);
    }
  }, [storageShowFrase, day]);

  return (
    <UnMotivationSC>
      {!showFrase && (
        <FraseOverlay>
          <h3>Quer mesmo ver a frase do dia?</h3>
          <small>Esteja preparado, eu te avisei...</small>
          <Button onClick={handleShowFrase}>Ver frase</Button>
        </FraseOverlay>
      )}
      <h1>{frasesDesmotivacionais[day]}</h1>
    </UnMotivationSC>
  );
};

export default UnMotivation;
