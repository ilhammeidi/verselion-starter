import { makeStyles } from 'tss-react/mui';
import { darken } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import gradient from '~/theme/gradient';

const sectionMargin = margin => (margin * 20);
const titleStyle = {
  fontSize: 48,
  lineHeight: '62px',
  textTransform: 'capitalize',
  fontWeight: 700,
  marginBottom: 40,
  position: 'relative'
};

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useSpacing = makeStyles({ uniqId: 'spacing' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    background: theme.palette.mode === 'dark' ? darken(theme.palette.primary.dark, 0.5) : theme.palette.background.paper,
    [theme.breakpoints.down('md')]: {
      overflow: 'hidden'
    },
    '& ul[class="slick-dots"]': {
      '& li': {
        width: 15,
        height: 15,
        boxShadow: `inset 0 0 0 1px ${theme.palette.text.disabled}`,
        border: 'none',
        borderRadius: 15,
        opacity: 1,
        margin: '0 4px !important',
        transition: 'width 0.5s ease-in',
        overflow: 'hidden',
        '& button': {
          background: gradient(theme).triple.light,
          opacity: 0,
          width: '100%',
          height: '100%',
          transition: 'opacity 1s ease-in',
        },
        '&[class="slick-active"]': {
          boxShadow: 'none',
          width: 40,
          '& button': {
            opacity: 1,
          },
        }
      },
      '& li button:before': {
        display: 'none'
      }
    }
  },
  innerPage: {
    paddingTop: theme.spacing(10),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(15),
    }
  },
  higherTop: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(8),
    }
  },
  colouredPage: {
    position: 'relative',
    overflow: 'hidden',
    color: theme.palette.common.white,
    backgroundImage: theme.palette.mode === 'dark' ? `linear-gradient(120deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})` : `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
  },
  spaceBottom: {
    marginBottom: sectionMargin(8),
    [theme.breakpoints.down('lg')]: {
      marginBottom: sectionMargin(4)
    }
  },
  spaceTop: {
    marginTop: sectionMargin(8),
    [theme.breakpoints.down('lg')]: {
      marginTop: sectionMargin(4)
    }
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(6),
    [theme.breakpoints.down('lg')]: {
      marginBottom: sectionMargin(2.4)
    }
  },
  spaceTopShort: {
    marginTop: sectionMargin(6),
    [theme.breakpoints.down('lg')]: {
      marginTop: sectionMargin(2.4)
    }
  },
  containerWrap: {
    '& > section': {
      position: 'relative'
    }
  },
  containerFront: {
    position: 'relative',
    zIndex: 20
  },
  fullScreenContainer: {
    height: '100vh',
    position: 'relative',
    display: 'flex',
    overflow: 'hidden'
  },
  maintenanceIcon: {
    margin: theme.spacing(3),
    background: theme.palette.divider,
    color: theme.palette.secondary.main,
    width: 100,
    height: 100,
    '& svg': {
      fontSize: 64,
    },
  },
  btn: {
    background: theme.palette.divider,
    margin: theme.spacing(0, 1)
  },
  fb: {
    color: '#3f51b5'
  },
  ig: {
    color: '#9c27b0'
  },
  tw: {
    color: '#2196f3'
  },
  li: {
    color: '#2196f3'
  },
  btnNotify: {
    minWidth: 120,
    margin: 4,
    whiteSpace: 'nowrap'
  },
  item: {
    '& > div': {
      margin: '0 auto'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const usePopup = makeStyles({ uniqId: 'popup' })(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useTextAlign = makeStyles({ uniqId: 'text_align' })({
  textCenter: {
    textAlign: 'center'
  },
  textLeft: {
    textAlign: 'left'
  },
  textRight: {
    textAlign: 'right'
  }
});

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useFloat = makeStyles({ uniqId: 'float' })({
  floatLeft: {
    float: 'left'
  },
  floatRight: {
    float: 'right'
  },
});

export const useTextGradient = makeStyles({ uniqId: 'gradient' })(theme => ({
  primaryDark: {
    background: gradient(theme).primary.dark,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  primaryLight: {
    background: gradient(theme).primary.light,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  secondaryDark: {
    background: gradient(theme).secondary.dark,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  secondaryLight: {
    background: gradient(theme).secondary.light,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  accent: {
    background: gradient(theme).accent,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  doubleLight: {
    background: gradient(theme).double.light,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  doubleMain: {
    background: gradient(theme).double.main,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  doubleDark: {
    background: gradient(theme).double.dark,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  tripleLight: {
    background: gradient(theme).triple.light,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  tripleMain: {
    background: gradient(theme).triple.main,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  tripleDark: {
    background: gradient(theme).triple.dark,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  success: {
    backgroundImage: 'linear-gradient(153deg, #84FF95 0%, #006064 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  error: {
    backgroundImage: 'linear-gradient(153deg, #FFBABA 0%, #FF0000 100%);',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  pending: {
    backgroundImage: 'linear-gradient(153deg, #FFEA84 0%, #FF9000 100%);',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  disabled: {
    backgroundImage: 'linear-gradient(153deg, #E3E3E3 0%, #232323 100%);',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useText = makeStyles({ uniqId: 'text' })(theme => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 48,
    lineHeight: '72px',
    [theme.breakpoints.down('lg')]: {
      fontSize: 38,
      lineHeight: '60px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
      lineHeight: '44px'
    },
  },
  title2: {
    fontSize: 36,
    lineHeight: '56px',
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('lg')]: {
      fontSize: 32,
      lineHeight: '48px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
      lineHeight: '36px',
    }
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 28,
    lineHeight: '44px',
    [theme.breakpoints.down('lg')]: {
      fontSize: 24,
      lineHeight: '36px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      lineHeight: '28px',
    },
  },
  subtitle2: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 22,
    lineHeight: '32px',
    [theme.breakpoints.down('lg')]: {
      fontSize: 20,
      lineHeight: '32px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      lineHeight: '24px',
    },
  },
  paragraph: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px'
  },
  caption: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 14,
    lineHeight: '24px',
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      lineHeight: '22px',
    },
  },
  titlePrimary: {
    ...titleStyle,
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
  },
  titleSecondary: {
    ...titleStyle,
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark
  },
  textPrimary: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
  },
  textSecondary: {
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark
  },
  primaryColor: {
    color: theme.palette.primary.main
  },
  secondaryColor: {
    color: theme.palette.secondary.main
  },
  accentColor: {
    color: theme.palette.accent.main
  },
  capitalize: {
    textTransform: 'capitalize'
  },
  uppercase: {
    textTransform: 'uppercase'
  },
  lowercase: {
    textTransform: 'lowercase'
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  medium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  regular: {
    fontWeight: theme.typography.fontWeightRegular,
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useHidden = makeStyles({ uniqId: 'hidden' })(theme => ({
  lgDown: {
    [theme.breakpoints.down('xl')]: {
      display: 'none'
    }
  },
  mdDown: {
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  smDown: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  xsDown: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  lgUp: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  mdUp: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  smUp: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useFlexBox = makeStyles({ uniqId: 'flex' })(() => ({
  justifyStart: {
    justifyContent: 'flex-star'
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  justifyEnd: {
    justifyContent: 'flex-end'
  },
  alignStart: {
    alignItems: 'flex-star'
  },
  alignCenter: {
    alignItems: 'center'
  },
  alignEnd: {
    alignItems: 'flex-end'
  },
}));

// TODO jss-to-tss-react codemod: Unable to handle style definition reliably. Unsupported arrow function syntax.
// Unexpected value type of ConditionalExpression.
// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useFlipRtl = makeStyles({ uniqId: 'flip' })(theme => ({
  transform: theme.direction === 'rtl' ? 'scale(-1)' : 'none'
}));

export const useBackground = makeStyles({ uniqId: 'background' })(theme => ({
  primaryMain: {
    backgroundColor: theme.palette.primary.main,
    color: '#FFF'
  },
  primaryLight: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.dark,
  },
  primaryDark: {
    backgroundColor: theme.palette.primary.dark,
    color: '#FFF'
  },
  secondaryMain: {
    backgroundColor: theme.palette.secondary.main,
    color: '#FFF'
  },
  secondaryLight: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
  },
  secondaryDark: {
    backgroundColor: theme.palette.secondary.dark,
    color: '#FFF'
  },
  accentMain: {
    backgroundColor: theme.palette.accent.main,
    color: '#FFF'
  },
  accentLight: {
    backgroundColor: theme.palette.accent.light,
    color: theme.palette.accent.dark,
  },
  accentDark: {
    backgroundColor: theme.palette.accent.dark,
    color: '#FFF'
  },
  accent2Main: {
    backgroundColor: purple[500],
    color: '#FFF'
  },
  accent2Light: {
    backgroundColor: purple[100],
    color: purple[800],
  },
  accent2Dark: {
    backgroundColor: purple[800],
    color: '#FFF'
  },
}));
