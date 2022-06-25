import styled from 'styled-components';

import Box from '../Box';

const Divider = styled(Box)`
  background-color: ${(props) => props.theme.colors.blue};
  width: 100%;
  height: 1px;
`;

export default Divider;
