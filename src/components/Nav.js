import React,{useState}  from 'react'
import {AppBar,Container,Toolbar,Menu,MenuItem} from '@mui/material'
import {Link} from 'react-router-dom'

function Nav() {
    
  return (
    <>
        <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Menu>
                <MenuItem><Link to="/" style={{textDecoration:"none",color:"#fff"}}>Home</Link></MenuItem>
            </Menu>
        </Toolbar>
        </Container>
        </AppBar>
    </>
  )
}

export default Nav