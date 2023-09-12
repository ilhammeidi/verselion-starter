import { darken } from '@mui/material/styles';
import palette from './palette';

const appTheme = (color, mode) => ({
  palette: {
    mode,
    primary: palette(color, mode).palette.primary,
    secondary: palette(color, mode).palette.secondary,
    accent: palette(color, mode).palette.accent,
    primaryLight: {
      main: palette(color, mode).palette.primary.light,
      contrastText: palette(color, mode).palette.primary.dark,
    },
    secondaryLight: {
      main: palette(color, mode).palette.secondary.light,
      contrastText: palette(color, mode).palette.secondary.dark,
    },
    black: {
      main: '#000000',
      contrastText: '#FFFFFF',
    },
    white: {
      main: '#FFFFFF',
      contrastText: '#000000',
    },
    invert: {
      main: mode === 'dark' ? '#FFFFFF' : '#000000',
      contrastText: mode === 'dark' ? '#000000' : '#FFFFFF',
    },
    action: {
      hover: mode === 'dark' ? 'rgba(128,128,128, 0.9)' : 'rgba(128,128,128, 0.05)',
      hoverOpacity: 0.05
    },
    background: {
      paper: mode === 'dark' ? '#0a0a0a' : '#FFFFFF',
      default: mode === 'dark' ? '#303030' : '#fafafa',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif'
    ].join(','),
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 800,
  },
  shade: {
    light: '0 3px 49px 9px rgba(0,0,0,0.06)',
    dark: '0px 1px 3px 0px rgba(64, 64, 64, 1), 0px 1px 1px 0px rgba(42, 42, 42, 1), 0px 2px 1px -1px rgba(20, 20, 20, 1)'
  },
  rounded: {
    small: '8px',
    medium: '12px',
    big: '20px'
  },
  shadows: mode === 'dark'
    ? [
      'none',
      '0px 1px 3px 0px rgba(50,50,50, 0.2),0px 1px 1px 0px rgba(50,50,50, 0.14),0px 2px 1px -1px rgba(50,50,50, 0.12)',
      '0px 1px 5px 0px rgba(50,50,50, 0.2),0px 2px 2px 0px rgba(50,50,50, 0.14),0px 3px 1px -2px rgba(50,50,50, 0.12)',
      '0px 1px 8px 0px rgba(50,50,50, 0.2),0px 3px 4px 0px rgba(50,50,50, 0.14),0px 3px 3px -2px rgba(50,50,50, 0.12)',
      '0px 2px 4px -1px rgba(50,50,50, 0.2),0px 4px 5px 0px rgba(50,50,50, 0.14),0px 1px 10px 0px rgba(50,50,50, 0.12)',
      '0px 3px 5px -1px rgba(50,50,50, 0.2),0px 5px 8px 0px rgba(50,50,50, 0.14),0px 1px 14px 0px rgba(50,50,50, 0.12)',
      '0px 3px 5px -1px rgba(50,50,50, 0.2),0px 6px 10px 0px rgba(50,50,50, 0.14),0px 1px 18px 0px rgba(50,50,50, 0.12)',
      '0px 4px 5px -2px rgba(50,50,50, 0.2),0px 7px 10px 1px rgba(50,50,50, 0.14),0px 2px 16px 1px rgba(50,50,50, 0.12)',
      '0px 5px 5px -3px rgba(50,50,50, 0.2),0px 8px 10px 1px rgba(50,50,50, 0.14),0px 3px 14px 2px rgba(50,50,50, 0.12)',
      '0px 5px 6px -3px rgba(50,50,50, 0.2),0px 9px 12px 1px rgba(50,50,50, 0.14),0px 3px 16px 2px rgba(50,50,50, 0.12)',
      '0px 6px 6px -3px rgba(50,50,50, 0.2),0px 10px 14px 1px rgba(50,50,50, 0.14),0px 4px 18px 3px rgba(50,50,50, 0.12)',
      '0px 6px 7px -4px rgba(50,50,50, 0.2),0px 11px 15px 1px rgba(50,50,50, 0.14),0px 4px 20px 3px rgba(50,50,50, 0.12)',
      '0px 7px 8px -4px rgba(50,50,50, 0.2),0px 12px 17px 2px rgba(50,50,50, 0.14),0px 5px 22px 4px rgba(50,50,50, 0.12)',
      '0px 7px 8px -4px rgba(50,50,50, 0.2),0px 13px 19px 2px rgba(50,50,50, 0.14),0px 5px 24px 4px rgba(50,50,50, 0.12)',
      '0px 7px 9px -4px rgba(50,50,50, 0.2),0px 14px 21px 2px rgba(50,50,50, 0.14),0px 5px 26px 4px rgba(50,50,50, 0.12)',
      '0px 8px 9px -5px rgba(50,50,50, 0.2),0px 15px 22px 2px rgba(50,50,50, 0.14),0px 6px 28px 5px rgba(50,50,50, 0.12)',
      '0px 8px 10px -5px rgba(50,50,50, 0.2),0px 16px 24px 2px rgba(50,50,50, 0.14),0px 6px 30px 5px rgba(50,50,50, 0.12)',
      '0px 8px 11px -5px rgba(50,50,50, 0.2),0px 17px 26px 2px rgba(50,50,50, 0.14),0px 6px 32px 5px rgba(50,50,50, 0.12)',
      '0px 9px 11px -5px rgba(50,50,50, 0.2),0px 18px 28px 2px rgba(50,50,50, 0.14),0px 7px 34px 6px rgba(50,50,50, 0.12)',
      '0px 9px 12px -6px rgba(50,50,50, 0.2),0px 19px 29px 2px rgba(50,50,50, 0.14),0px 7px 36px 6px rgba(50,50,50, 0.12)',
      '0px 10px 13px -6px rgba(50,50,50, 0.2),0px 20px 31px 3px rgba(50,50,50, 0.14),0px 8px 38px 7px rgba(50,50,50, 0.12)',
      '0px 10px 13px -6px rgba(50,50,50, 0.2),0px 21px 33px 3px rgba(50,50,50, 0.14),0px 8px 40px 7px rgba(50,50,50, 0.12)',
      '0px 10px 14px -6px rgba(50,50,50, 0.2),0px 22px 35px 3px rgba(50,50,50, 0.14),0px 8px 42px 7px rgba(50,50,50, 0.12)',
      '0px 11px 14px -7px rgba(50,50,50, 0.2),0px 23px 36px 3px rgba(50,50,50, 0.14),0px 9px 44px 8px rgba(50,50,50, 0.12)',
      '0px 11px 15px -7px rgba(50,50,50, 0.2),0px 24px 38px 3px rgba(850,50,50 0.14),0px 9px 46px 8px rgba(50,50,50, 0.12)',
    ]
    : [
      'none',
      '0px 1px 3px 0px rgba(128,128,128, 0.2),0px 1px 1px 0px rgba(128,128,128, 0.14),0px 2px 1px -1px rgba(128,128,128, 0.12)',
      '0px 1px 5px 0px rgba(128,128,128, 0.2),0px 2px 2px 0px rgba(128,128,128, 0.14),0px 3px 1px -2px rgba(128,128,128, 0.12)',
      '0px 1px 8px 0px rgba(128,128,128, 0.2),0px 3px 4px 0px rgba(128,128,128, 0.14),0px 3px 3px -2px rgba(128,128,128, 0.12)',
      '0px 2px 4px -1px rgba(128,128,128, 0.2),0px 4px 5px 0px rgba(128,128,128, 0.14),0px 1px 10px 0px rgba(128,128,128, 0.12)',
      '0px 3px 5px -1px rgba(128,128,128, 0.2),0px 5px 8px 0px rgba(128,128,128, 0.14),0px 1px 14px 0px rgba(128,128,128, 0.12)',
      '0px 3px 5px -1px rgba(128,128,128, 0.2),0px 6px 10px 0px rgba(128,128,128, 0.14),0px 1px 18px 0px rgba(128,128,128, 0.12)',
      '0px 4px 5px -2px rgba(128,128,128, 0.2),0px 7px 10px 1px rgba(128,128,128, 0.14),0px 2px 16px 1px rgba(128,128,128, 0.12)',
      '0px 5px 5px -3px rgba(128,128,128, 0.2),0px 8px 10px 1px rgba(128,128,128, 0.14),0px 3px 14px 2px rgba(128,128,128, 0.12)',
      '0px 5px 6px -3px rgba(128,128,128, 0.2),0px 9px 12px 1px rgba(128,128,128, 0.14),0px 3px 16px 2px rgba(128,128,128, 0.12)',
      '0px 6px 6px -3px rgba(128,128,128, 0.2),0px 10px 14px 1px rgba(128,128,128, 0.14),0px 4px 18px 3px rgba(128,128,128, 0.12)',
      '0px 6px 7px -4px rgba(128,128,128, 0.2),0px 11px 15px 1px rgba(128,128,128, 0.14),0px 4px 20px 3px rgba(128,128,128, 0.12)',
      '0px 7px 8px -4px rgba(128,128,128, 0.2),0px 12px 17px 2px rgba(128,128,128, 0.14),0px 5px 22px 4px rgba(128,128,128, 0.12)',
      '0px 7px 8px -4px rgba(128,128,128, 0.2),0px 13px 19px 2px rgba(128,128,128, 0.14),0px 5px 24px 4px rgba(128,128,128, 0.12)',
      '0px 7px 9px -4px rgba(128,128,128, 0.2),0px 14px 21px 2px rgba(128,128,128, 0.14),0px 5px 26px 4px rgba(128,128,128, 0.12)',
      '0px 8px 9px -5px rgba(128,128,128, 0.2),0px 15px 22px 2px rgba(128,128,128, 0.14),0px 6px 28px 5px rgba(128,128,128, 0.12)',
      '0px 8px 10px -5px rgba(128,128,128, 0.2),0px 16px 24px 2px rgba(128,128,128, 0.14),0px 6px 30px 5px rgba(128,128,128, 0.12)',
      '0px 8px 11px -5px rgba(128,128,128, 0.2),0px 17px 26px 2px rgba(128,128,128, 0.14),0px 6px 32px 5px rgba(128,128,128, 0.12)',
      '0px 9px 11px -5px rgba(128,128,128, 0.2),0px 18px 28px 2px rgba(128,128,128, 0.14),0px 7px 34px 6px rgba(128,128,128, 0.12)',
      '0px 9px 12px -6px rgba(128,128,128, 0.2),0px 19px 29px 2px rgba(128,128,128, 0.14),0px 7px 36px 6px rgba(128,128,128, 0.12)',
      '0px 10px 13px -6px rgba(128,128,128, 0.2),0px 20px 31px 3px rgba(128,128,128, 0.14),0px 8px 38px 7px rgba(128,128,128, 0.12)',
      '0px 10px 13px -6px rgba(128,128,128, 0.2),0px 21px 33px 3px rgba(128,128,128, 0.14),0px 8px 40px 7px rgba(128,128,128, 0.12)',
      '0px 10px 14px -6px rgba(128,128,128, 0.2),0px 22px 35px 3px rgba(128,128,128, 0.14),0px 8px 42px 7px rgba(128,128,128, 0.12)',
      '0px 11px 14px -7px rgba(128,128,128, 0.2),0px 23px 36px 3px rgba(128,128,128, 0.14),0px 9px 44px 8px rgba(128,128,128, 0.12)',
      '0px 11px 15px -7px rgba(128,128,128, 0.2),0px 24px 38px 3px rgba(128,128,128, 0.14),0px 9px 46px 8px rgba(128,128,128, 0.12)',
    ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'h1, h2, h3, h4, h5, h6': {
          margin: 0
        },
        p: {
          marginTop: 0,
          marginBottom: 16
        },
        button: {
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 14
        }
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          '@media (min-width: 1200px)': {
            maxWidth: 1280
          }
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        filled: {
          paddingTop: 8
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: '#EEE'
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          borderRadius: '8px 8px 0 0'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 12
        },
        elevation1: {
          boxShadow: mode === 'dark' ? '0 3px 49px 9px rgba(0,0,0,0.24)' : '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)'
        },
        elevation4: {
          boxShadow: mode === 'dark' ? '0px 2px 4px -1px rgba(17, 17, 17, 0.46), 0px 4px 5px 0px rgba(42, 42, 42, 0.32), 0px 1px 10px 0px rgba(20, 20, 20, 0.12)' : '0 1.5px 12px 4px rgba(0, 0, 0, 0.12)'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          }
        },
        containedSecondary: {
          '&:hover': {
            backgroundColor: darken(palette(color, mode).palette.secondary.main, 0.1)
          }
        },
        containedPrimaryLight: {
          '&:hover': {
            backgroundColor: darken(palette(color, mode).palette.primary.light, 0.1)
          }
        },
        containedSecondaryLight: {
          '&:hover': {
            backgroundColor: darken(palette(color, mode).palette.secondary.light, 0.1)
          }
        },
        outlinedPrimary: {
          borderColor: mode === 'dark' ? palette(color, mode).palette.primary.light : palette(color, mode).palette.primary.main,
          color: mode === 'dark' ? palette(color, mode).palette.primary.light : palette(color, mode).palette.primary.main,
          '&:hover': {
            borderColor: mode === 'dark' ? palette(color, mode).palette.primary.light : palette(color, mode).palette.primary.main,
          }
        },
        outlinedSecondary: {
          borderColor: mode === 'dark' ? palette(color, mode).palette.secondary.main : palette(color, mode).palette.secondary.dark,
          color: mode === 'dark' ? palette(color, mode).palette.secondary.main : palette(color, mode).palette.secondary.dark,
          '&:hover': {
            borderColor: mode === 'dark' ? palette(color, mode).palette.secondary.main : palette(color, mode).palette.secondary.dark,
          }
        },
        textPrimary: {
          color: mode === 'dark' ? palette(color, mode).palette.primary.light : palette(color, mode).palette.primary.main,
        },
        textSecondary: {
          color: mode === 'dark' ? palette(color, mode).palette.secondary.main : palette(color, mode).palette.secondary.dark,
        },
        root: {
          borderRadius: 36,
          fontWeight: 600,
          padding: '8px 24px'
        },
      }
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          borderRadius: 36,
        },
      }
    },
    MuiTypography: {
      styleOverrides: {
        button: {
          fontWeight: 600
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: `rgba(128,128,128, ${mode === 'dark' ? 0.2 : 0.05})`
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: palette(color, mode).palette.secondary.main
          }
        },
        filled: {
          top: -2,
          '&.MuiInputLabel-shrink': {
            color: palette(color, mode).palette.secondary.main
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: '12px !important',
          backgroundColor: 'none',
          border: '1px solid',
          borderColor: mode === 'dark' ? 'hsla(0,0%,100%,.25)' : 'rgba(0,0,0,.2)',
          '&:before': {
            display: 'none'
          },
          '&:after': {
            display: 'none'
          },
          '&.Mui-focused': {
            borderColor: palette(color, mode).palette.secondary.main,
            backgroundColor: 'none',
          },
          '&:hover': {
            backgroundColor: 'none',
          }
        },
        adornedEnd: {
          paddingRight: 0,
          paddingLeft: 8,
          '& input': {
            padding: 4,
          }
        },
        input: {
          padding: '19px 12px 6px'
        }
      }
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          background: 'none'
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          borderRadius: 40,
          background: `linear-gradient(148deg, ${palette(color, mode).palette.secondary.light} 0%, ${palette(color, mode).palette.primary.light} 46%, ${palette(color, mode).palette.accent.light} 100%)`,
          '& .MuiTab-root': {
            color: '#000',
            borderBottom: 'none',
            '&.Mui-selected': {
              color: '#FFF',
              zIndex: 1,
            }
          },
          '& .MuiTabs-flexContainer': {
            padding: '0 10px',
          },
          '& .MuiTabs-indicator': {
            borderRadius: 30,
            backgroundColor: '#000',
            height: '80%',
            bottom: '10%'
          }
        },
      }
    }
  },
});

export default appTheme;
