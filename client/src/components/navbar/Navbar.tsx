import React, { useState } from 'react'
import {
  AppBar,
  Typography,
  Toolbar,
  MenuItem,
  Menu,
  InputBase,
  Badge,
  Avatar,
} from '@mui/material'
import styled from '@emotion/styled'
import { Box } from '@mui/system'
import { Mail, Notifications } from '@mui/icons-material'

const SearchContainer = styled('div')(({ theme }) => ({
  background: 'white',
  width: '40%',
  padding: '6px',
  borderRadius: '2px',
}))

const Icons = styled(Box)(({ theme }) => ({
  gap: '20px',
  display: 'flex',
  alignItems: 'center',
}))

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography>Logo here</Typography>
        <SearchContainer>
          <InputBase placeholder="search ...." />
        </SearchContainer>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ height: 30, width: 30 }}
            onClick={() => setOpen(!open)}
          />
        </Icons>
        <Menu
          open={open}
          onClose={() => setOpen(!open)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          sx={{ marginTop: '40px' }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
