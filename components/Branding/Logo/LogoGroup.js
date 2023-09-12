import React from 'react';
import Container from '@mui/material/Container';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'logo_group' })(theme => ({
  root: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      overflowX: 'auto'
    },
    '& img': {
      height: 64,
      margin: theme.spacing(4),
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
      transition: 'all 0.3s ease-out',
      '&:hover': {
        filter: 'none'
      }
    }
  },
}));

const logos = [
  '/images/logos/architect.png',
  '/images/logos/cloud.png',
  '/images/logos/coin.png',
  '/images/logos/mobile.png',
  '/images/logos/profile.png',
  '/images/logos/saas.png',
];

function CompanyLogo() {
  const { classes } = useStyles();
  return (
    <Container fixed>
      <div className={classes.root}>
        {logos.map((logo, index) => (
          <img src={logo} alt={'logo' + index.toString()} key={index.toString()} />
        ))}
      </div>
    </Container>
  );
}

export default CompanyLogo;
