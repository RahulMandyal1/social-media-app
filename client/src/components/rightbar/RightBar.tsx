import React from 'react'
import { Box, Stack } from '@mui/system'
import {
  Avatar,
  AvatarGroup,
  ImageList,
  ImageListItem,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from '@mui/material'

const RightBar = () => {
  return (
    <Box
      component={'aside'}
      sx={{
        flex: '2 !important',
        width: '25%',
        display: { xs: 'none', sm: 'block' },
      }}
    >
      <Box position={'fixed'} sx={{ padding: '16px' }}>
        <Stack spacing={3}>
          <Box>
            <Typography variant="h6">Online Friends</Typography>
            <AvatarGroup max={7} sx={{ flexDirection: 'row' }}>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
              />
              <Avatar
                alt="Travis Howard"
                src="https://material-ui.com/static/images/avatar/2.jpg"
              />
              <Avatar
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
              <Avatar alt="Agnes Walker" src="" />
              <Avatar
                alt="Trevor Henderson"
                src="https://material-ui.com/static/images/avatar/6.jpg"
              />
              <Avatar
                alt="Trevor Henderson"
                src="https://material-ui.com/static/images/avatar/7.jpg"
              />
              <Avatar
                alt="Trevor Henderson"
                src="https://material-ui.com/static/images/avatar/8.jpg"
              />
              <Avatar
                alt="Trevor Henderson"
                src="https://material-ui.com/static/images/avatar/7.jpg"
              />
              <Avatar
                alt="Trevor Henderson"
                src="https://material-ui.com/static/images/avatar/8.jpg"
              />
            </AvatarGroup>
          </Box>

          <Box>
            <Typography variant={'h6'}>Latest Photos</Typography>
            <ImageList cols={3} rowHeight={164} sx={{ overflow: 'hidden' }}>
              <ImageListItem>
                <img
                  src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=600 "
                  alt="jungle photo"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="hacker-mask"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="https://images.pexels.com/photos/845405/pexels-photo-845405.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="car photo"
                />
              </ImageListItem>
            </ImageList>
          </Box>
          <Box>
            <Typography variant={'h6'}>Latest Conversation</Typography>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    src="https://material-ui.com/static/images/avatar/2.jpg"
                    sx={{ width: 30, height: 30 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography sx={{ color: '#000' }} component="span">
                        Ali Connors —{' '}
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    alt="Rampy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                    sx={{ width: 30, height: 30 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography sx={{ color: '#000' }} component="span">
                        Ali Connors —{' '}
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default RightBar
