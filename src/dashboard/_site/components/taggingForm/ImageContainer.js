import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import CardMedia from '@material-ui/core/CardMedia';
import * as colors from '@material-ui/core/colors/';
import { makeStyles,withStyles  } from '@material-ui/core/styles';
import theme from '../theme';


// async function test(url) {
//     return  (fetch( url, { 
//         method: "GET",
//         headers: {
//         "Content-Type": "application/json",
//         },
//     })

// }

let imageObj;
export default class ImageContainer extends React.Component{

    state = {
        imageLoading:true
    }
    
    componentDidMount() {
        //imageObj = test(this.props.imageUrl.full)

        fetch( this.props.imageUrl.compressed, { 
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
        })
        .then(response => {
            //console.log(response)
            this.state.imageLoading == false
        })
    }

    render() {

        const  {
            classes,
            state,
            imageUrl,
            handleExpandClick
        } = this.props

        
        
       
        return (
            <React.Fragment>
                <CardActions disableSpacing className={classes.dropdownStyles}>
                    <ViewFullImage 
                        color="primary" 
                        variant="outlined" 
                        style={{marginRight:10}}
                        onClick = {()=>{
                            window.open(  imageUrl.compressed, 'Compressed Image')
                        }}
                    >
                        View compressed image
                    </ViewFullImage>
                    <ViewCompressedImage 
                        color="secondary" 
                        variant="outlined"
                        onClick = {()=>{
                            window.open( imageUrl.full, 'Full Image')
                        }}
                    >
                        View full image
                    </ViewCompressedImage>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: state.expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={state.expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
{/*                 
                {
                    this.state.imageLoading && "LOADING"
                }
                {
                    JSON.stringify(this.state)
                } */}
                <Collapse in={state.expanded} timeout="auto" unmountOnExit>
                    {/* <CardContent>  
                    </CardContent> */}
                    <CardMedia
                        className={classes.media}
                        image={imageUrl.compressed}
                        title={`Image ${imageUrl.compressed}`}
                        src="Loading"
                    />
                </Collapse>
            </React.Fragment>
        )
    }
}

const ColorizeButton = (color,theme) => {
    return {
        root: {
            color: (color.color),
            borderColor: color.background,
            '&:hover': {
                borderColor: color.background,
                color:theme.palette.getContrastText(color.color),
                backgroundColor: color.hover,
            },
        },
    }
}
const ViewFullImage = withStyles((theme) => (
    //ColorizeButton({color:colors.orange[600],background:colors.orange[600],hover:colors.orange[800]},theme)
    ColorizeButton({
        color:theme.palette.primary.light,
        background:theme.palette.primary.main,
        hover:theme.palette.primary.main
    },theme)
))(Button);

const ViewCompressedImage = withStyles((theme) => (
    ColorizeButton({
        color:theme.palette.primary.light,
        background:theme.palette.primary.main,
        hover:theme.palette.primary.main
    },theme)
))(Button);