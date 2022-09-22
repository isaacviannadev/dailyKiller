import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { frasesDesmotivacionais } from '../../../lib/motivador';
import Button from '../../UI/Button';

const UnMotivatedSC = styled.div`
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
      padding: 20px 20px 40px 0;
    }

    h1::before {
      content: '"';
      position: absolute;
      top: -30px;
      left: 0;
      font-size: 12rem;
      color: ${theme.color.background.darkest};
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

    background: rgba(211, 187, 136, 0.25);
    box-shadow: 0 8px 32px 0 rgba(211, 187, 136, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);

    & > h3 {
      text-align: center;
      max-width: 70%;
    }

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

const UnMotivated = () => {
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

  console.log(storageShowFrase, 'storageShowFrase');

  useEffect(() => {
    if (storageShowFrase) {
      const { showFrase: storageShowFraseValue, dia } =
        JSON.parse(storageShowFrase);
      if (day !== dia - 1) {
        localStorage.removeItem('showFrase');
        setShowFrase(storageShowFraseValue);
      }
      handleShowFrase();
    }
  }, []);

  return (
    <UnMotivatedSC>
      {!showFrase && (
        <FraseOverlay>
          <h3>Quer mesmo ver a frase do dia?</h3>
          <small>Esteja preparado, eu te avisei...</small>
          <Button onClick={handleShowFrase}>Ver frase</Button>
        </FraseOverlay>
      )}
      <h1>{frasesDesmotivacionais[day]}</h1>
    </UnMotivatedSC>
  );
};

export default UnMotivated;
