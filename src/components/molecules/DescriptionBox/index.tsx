import styled, { css } from 'styled-components';

const DescriptionBoxSC = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: fit-content;
    text-align: center;

    p {
      margin: 0;
      font-size: ${theme.fontsize.xs};
    }

    @media only screen and (max-width: ${theme.breakpoints.md}) {
      h3 {
        font-size: ${theme.fontsize.m};
      }
      p {
        margin: 0;
        font-size: ${theme.fontsize.xs};
      }
    }
  `}
`;

type DescriptionBoxProps = {
  description: string;
  desabafo?: string;
};
const DescriptionBox = ({ description, desabafo }: DescriptionBoxProps) => {
  return (
    <DescriptionBoxSC>
      <h3>{description}</h3>
      {desabafo && <p>{desabafo}</p>}
    </DescriptionBoxSC>
  );
};

export default DescriptionBox;
