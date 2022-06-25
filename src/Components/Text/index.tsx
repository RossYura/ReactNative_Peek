import {
  color,
  ColorProps,
  typography,
  TypographyProps,
  space,
  SpaceProps,
} from 'styled-system';
import styled from 'styled-components/native';

const Text = styled.Text<TypographyProps | ColorProps | SpaceProps>`
  font-family: 'CircularStd-Book';
  ${typography};
  ${color}
  ${space}
`;

Text.defaultProps = {
  allowFontScaling: false,
};

export default Text;
