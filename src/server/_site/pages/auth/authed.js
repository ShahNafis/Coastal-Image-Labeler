import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import ProTip from '../../components/ProTip';
import Link from '../../components/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function About({user}) {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button variant="contained" color="primary" component={Link} naked href="/">
          Go to the main page
        </Button>
        <Button variant="contained" color="secondary" component={Link} naked href="/logout">
          Logout
        </Button>
        <Button variant="contained" color="primary" >
          <a  href="/auth/auth2">
          Auth2
          </a>
        </Button>
        {/* <Button variant="contained" color="primary" component={Link} naked href="/auth/auth2">
          auth2
        </Button> */}
        <Link href="/auth/auth2">
          auth22222
        </Link>
        <br/>
        <br/>
        <div>
        {user.id}
        </div>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
