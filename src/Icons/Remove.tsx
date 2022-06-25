import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface RemoveProps {
  fill: string;
}

const Remove = ({fill}: RemoveProps) => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <Path
        d="M27.3567 19.9999L29.7133 17.6433C30.0169 17.3289 30.1849 16.9079 30.1811 16.4709C30.1773 16.0339 30.002 15.6159 29.693 15.3069C29.384 14.9979 28.966 14.8226 28.529 14.8188C28.092 14.815 27.671 14.983 27.3567 15.2866L25 17.6433L22.6433 15.2866C22.4896 15.1274 22.3057 15.0004 22.1023 14.9131C21.899 14.8257 21.6803 14.7798 21.459 14.7778C21.2377 14.7759 21.0182 14.8181 20.8134 14.9019C20.6086 14.9857 20.4225 15.1094 20.266 15.2659C20.1095 15.4224 19.9858 15.6085 19.902 15.8133C19.8182 16.0182 19.776 16.2376 19.7779 16.4589C19.7798 16.6802 19.8258 16.8989 19.9132 17.1023C20.0005 17.3056 20.1275 17.4895 20.2867 17.6433L22.6433 19.9999L20.2867 22.3566C20.1275 22.5103 20.0005 22.6942 19.9132 22.8976C19.8258 23.1009 19.7798 23.3196 19.7779 23.5409C19.776 23.7622 19.8182 23.9817 19.902 24.1865C19.9858 24.3913 20.1095 24.5774 20.266 24.7339C20.4225 24.8904 20.6086 25.0142 20.8134 25.098C21.0182 25.1818 21.2377 25.2239 21.459 25.222C21.6803 25.2201 21.899 25.1741 22.1023 25.0868C22.3057 24.9994 22.4896 24.8724 22.6433 24.7133L25 22.3566L27.3567 24.7133C27.5104 24.8724 27.6943 24.9994 27.8977 25.0868C28.101 25.1741 28.3197 25.2201 28.541 25.222C28.7623 25.2239 28.9818 25.1818 29.1866 25.098C29.3914 25.0142 29.5775 24.8904 29.734 24.7339C29.8905 24.5774 30.0142 24.3913 30.098 24.1865C30.1818 23.9817 30.224 23.7622 30.2221 23.5409C30.2202 23.3196 30.1742 23.1009 30.0868 22.8976C29.9995 22.6942 29.8725 22.5103 29.7133 22.3566L27.3567 19.9999ZM16.38 8.33325H33.3333C34.2174 8.33325 35.0652 8.68444 35.6903 9.30956C36.3155 9.93468 36.6667 10.7825 36.6667 11.6666V28.3333C36.6667 29.2173 36.3155 30.0652 35.6903 30.6903C35.0652 31.3154 34.2174 31.6666 33.3333 31.6666H16.38C15.496 31.6664 14.6483 31.3151 14.0233 30.6899L4.51166 21.1783C4.19921 20.8657 4.02368 20.4419 4.02368 19.9999C4.02368 19.558 4.19921 19.1341 4.51166 18.8216L14.0233 9.30992C14.6483 8.68475 15.496 8.33344 16.38 8.33325Z"
        fill={fill}
      />
    </Svg>
  );
};

Remove.defaultProps = {
  fill: 'white',
};

export default Remove;