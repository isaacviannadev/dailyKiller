import * as Tooltip from '@radix-ui/react-tooltip';
import styled, { css } from 'styled-components';

export const TooltipContentSC = styled(Tooltip.Content)`
  ${({ theme }) => css`
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: ${theme.color.main[500]};
    color: ${theme.color.background.light};
    font-weight: bold;
    border-radius: 4px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  `}
`;

export const TooltipArrowSC = styled(Tooltip.Arrow)`
  ${({ theme }) => css`
    color: ${theme.color.main[400]};
  `}
`;
