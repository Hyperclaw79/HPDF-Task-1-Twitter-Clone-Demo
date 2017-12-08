import {
  redA700,
  grey600,
  blueA100, blueA200, blueA400,
  fullWhite,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const CDT = getMuiTheme({
    spacing: spacing,
    fontFamily: 'Roboto, sans-serif',
    borderRadius: 2,
    palette: {
      primary1Color: redA700,
      primary2Color: redA700,
      primary3Color: grey600,
      accent1Color: blueA200,
      accent2Color: blueA400,
      accent3Color: blueA100,
      textColor: fullWhite,
      secondaryTextColor: fade(fullWhite, 0.7),
      alternateTextColor: '#303030',
      canvasColor: '#303030',
      borderColor: fade(fullWhite, 0.3),
      disabledColor: fade(fullWhite, 0.3),
      pickerHeaderColor: fade(fullWhite, 0.12),
      clockCircleColor: fade(fullWhite, 0.12),
    },
  });

export default CDT