import { styled, Paper as P } from '@material-ui/core';
import { Link } from 'react-router-dom';

/* Router styles */
export const MyHeader = styled('header')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '30px 0'
});

export const MyLinkTitle = styled(Link)({
  fontSize: '32px',
  fontWeight: 'bold',
  color: 'black',
  transition: '0.5s',
  '&:hover': {
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)'
  }
});

export const MyLink = styled(Link)({
  color: 'black',
  '&:hover': {
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)'
  }
});

export const Paper = styled(P)({
  padding: '30px',
  '& > h2': {
    textAlign: 'center'
  }
});
