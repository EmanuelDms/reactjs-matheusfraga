import { styled } from '@material-ui/core';
import { Link } from 'react-router-dom';

/* Router styles */
export const MyHeader = styled('header')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& ~ div': {
    padding: '50px'
  }
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
