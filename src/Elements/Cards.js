import styled from 'styled-components';
import {elevation} from 'Utilities';
import {transition} from 'Utilities';

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 15px;
  &:hover{
    ${elevation[5]};
    ${transition};
  }
`;
