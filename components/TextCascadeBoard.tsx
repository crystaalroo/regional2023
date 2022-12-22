import * as React from 'react'
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import BoardCard from './BoardCard'
import Link from 'next/link'

interface Props {
  children: React.ReactNode
  title: string
  menu: string[]
}

const TextCascadeBoard: React.FC<Props> = (props: Props) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        padding: { md: '0 50px', xs: '0 10px' },
        position: 'relative',
        display: 'flex',
        flexDirection: { sm: 'row', xs: 'column' },
        justifyContent: { sm: 'normal', xs: 'center' },
        alignItems: { sm: 'normal', xs: 'center' }
      }}
    >
      <Box // container for sticky
        sx={{
          paddingTop: { md: '300px', sm: '100px', xs: '50px' },
          width: { sm: '350px', xs: '200' },
          minHeight: '300px',
          height: 'auto',
          position: 'relative'
        }}
      >
        <Box
          sx={{
            position: { sm: 'sticky', xs: 'static' },
            width: '100%',
            top: '50px',
            left: 0,
            display: 'inline-block',
            padding: { sm: '0 0 100px 20px', xs: '0 0 0 20px' },
            borderColor: 'divider',
            borderStyle: 'solid',
            borderWidth: { sm: '0 0 0 2px', xs: '2px' }
          }}
        >
          <Typography variant="h5">{props.title}</Typography>
          <List>
            {props.menu.map(section => (
              <ListItem key={section}>
                <Link href={`#${section}`}>
                  <ListItemButton>
                    <ListItemIcon>
                      {/* <CircleIcon /> */}
                      <KeyboardArrowRightIcon
                        sx={{
                          color: 'primary.contrastText'
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText>{section}</ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      <Box
        sx={{
          paddingTop: { md: '100px', sm: '50px', xs: '0px' },
          width: '100%',
          maxWidth: '1280px',
          height: 'auto',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* <Box // left bar
          sx={{
            width: '1%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            borderColor: 'divider',
            borderRight: '1px solid'
          }}
        /> */}
        <Box // right bar
          sx={{
            width: '1%',
            position: 'absolute',
            top: '100px',
            bottom: 0,
            right: 0,
            borderColor: 'divider',
            borderLeft: '1px solid'
          }}
        />
        <Box
          sx={{
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {React.Children.map(
            React.Children.toArray(props.children),
            (child, index) => {
              if (typeof child === 'object' && 'props' in child) {
                return <BoardCard {...child.props} id={props.menu[index]} />
              }
              return child
            }
          )}
        </Box>
      </Box>
    </Box>
  )
}
export default TextCascadeBoard
