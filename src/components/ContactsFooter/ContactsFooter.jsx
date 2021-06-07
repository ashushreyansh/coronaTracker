import React from 'react';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

export default function ContactsFooter(){
    return (
        <AppBar className='Footer' position="static" color='transparent'>
          <Container maxWidth="lg">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                <Link target='_blank' href="https://github.com/ashushreyansh">Github Profile</Link> ||  <Link target='_blank' href="https://www.linkedin.com/in/shreyansh-chaurasia-5910781a9/">LinkedIn Profile</Link>
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    );
};