import React, { useEffect, useState } from 'react'
import { Box, Skeleton, Stack } from '@mui/material'
import Post from './Post'

const Feed = () => {
  const [isLoading, setIslodaing] = useState<boolean>(true)

  //set is laoding to false
  useEffect(() => {
    setTimeout(() => {
      setIslodaing(false)
    }, 3000)
  }, [])

  return (
    <Box flex={3} sx={{ padding: '16px 5%', boxSizing: 'border-box' }}>
      {isLoading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
          <Skeleton variant="text" height={100} />
        </Stack>
      ) : (
        <Box>
          <Post />
          <Post />
          <Post />
          <Post />
        </Box>
      )}
    </Box>
  )
}

export default Feed
