import React, { useState } from 'react'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'
import clsx from 'clsx'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import { ViewImage } from '@/components/Button/premadeButtons'
import { theme } from '@/components/theme'

interface Props {
  originalLink: string
  compressedLink: string
}

export function ImageContainer(props: Props) {
  const { originalLink, compressedLink } = props

  const [expanded, setExpanded] = useState(true)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const classes = useRowStyles()
  return (
    <React.Fragment>
      <CardActions disableSpacing className={classes.dropdownStyles}>
        <ViewImage
          style={{ marginRight: 10 }}
          onClick={() => {
            window.open(compressedLink, 'Compressed Image')
          }}
        >
          View compressed image
        </ViewImage>
        <ViewImage
          onClick={() => {
            window.open(originalLink, 'Full Image')
          }}
        >
          View full image
        </ViewImage>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardMedia
          className={classes.media}
          image={compressedLink}
          title={`Image ${compressedLink}`}
          src="Loading"
        />
      </Collapse>
    </React.Fragment>
  )
}

const useRowStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  dropdownStyles: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)', //
  },
})
