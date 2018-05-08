import styled from 'styled-components';
import { media } from 'styles/utils';

export default styled.div`
  width: 100%;
  position: relative;
  z-index: 1;

  ${media.tablet`
    padding: 0 ${props => (props.small ? 90 : 64)}px;
  `}

  ${media.desktop`
    padding: 0 ${props => (props.small ? 90 : 30)}px;
  `}

  ${media.large`
    padding: 0;
    width: ${props => (props.small ? 800 : 1140)}px;
    margin: 0 auto;
  `}
`;
