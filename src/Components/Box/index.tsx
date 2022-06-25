import styled from 'styled-components/native';
import {
  SpaceProps,
  ColorProps,
  BorderProps,
  FlexboxProps,
  border,
  space,
  color,
  flexbox,
  LayoutProps,
  layout,
  position,
  PositionProps,
} from 'styled-system';

export interface BoxProps
  extends SpaceProps,
    ColorProps,
    BorderProps,
    FlexboxProps,
    LayoutProps,
    PositionProps {}

const Box = styled.View<BoxProps>`
  ${space};
  ${color};
  ${border};
  ${flexbox};
  ${layout};
  ${position}
`;

export default Box;
