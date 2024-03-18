const gradient = (theme) => ({
    primary: {
      dark: `linear-gradient(148deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
      light: `linear-gradient(148deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
    },
    secondary: {
      dark: `linear-gradient(148deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
      light: `linear-gradient(148deg, ${theme.palette.secondary.main} 0%, ${theme.palette.common.white} 100%)`,
    },
    accent: `linear-gradient(148deg, ${theme.palette.accent.main} 0%, ${theme.palette.accent.light} 100%)`,
    double: {
      light: `linear-gradient(148deg, ${theme.palette.secondary.light} 0%, ${theme.palette.primary.light} 100%)`,
      main: `linear-gradient(148deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
      dark: `linear-gradient(148deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.primary.dark} 100%)`,
      primary: `linear-gradient(148deg, ${theme.palette.accent.main} -20%, ${theme.palette.primary.main} 80%)`,
      secondary: `linear-gradient(148deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
      accent: `linear-gradient(148deg, ${theme.palette.accent.main} 0%, ${theme.palette.secondary.main} 100%)`,
    },
    triple: {
      light: `linear-gradient(148deg, ${theme.palette.secondary.light} 0%, ${theme.palette.primary.light} 46%, ${theme.palette.accent.light} 100%)`,
      main: `linear-gradient(148deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.accent.main} 100%)`,
      dark: `linear-gradient(148deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 46%, ${theme.palette.accent.dark} 100%)`
    }
  });

export default gradient;
