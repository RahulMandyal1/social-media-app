import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Feed from './components/feed/Feed'
import RightBar from './components/rightbar/RightBar'
import SideBar from './components/sidebar/SideBar'
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'

interface IThemeType {
  mode: string
}

const App = () => {
  const [theme, setTheme] = useState<IThemeType>({
    mode: 'light',
  })

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: theme.mode === 'dark' ? '#000' : '#1760a5',
        light: theme.mode,
      },
      secondary: {
        main: '#15c630',
      },
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ boxSizing: 'border-box' }}>
        <Navbar />
        <Stack
          direction={'row'}
          spacing={3}
          sx={{
            justifyContent: 'space-between',
            padding: ' 30px 0',
          }}
        >
          <SideBar
            changeTheme={() =>
              setTheme(
                theme.mode === 'light' ? { mode: 'dark' } : { mode: 'light' }
              )
            }
          />
          <Feed />
          <RightBar />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default App
