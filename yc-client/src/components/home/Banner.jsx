import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core'
import { bannerData } from '../../data';
import { Box} from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    color: {
        background: '#D2CCB1 '
    },
    image: {
        width: '100%',
        height: 290,
        background: '#D2CCB1',
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            height: 180
        }
    }
}))

const Banner = () => {
    const classes = useStyle();
    return (
        <Box className={classes.color}>
        <Carousel 
            autoPlay={true} 
            animation="slide" 
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            className={classes.container}
            StylesProvider
            navButtonsProps={{ 
                style: {
                    color: '#494949',
                    backgroundColor: '#D2CCB1',
                    borderRadius: 0,
                    margin: 0,
                    width: 50,
                }
            }}
        >
            {
                bannerData.map(image => (
                    <img src={image} className={classes.image} />
                ))
            }
        </Carousel>
        </Box>
    )
}

export default Banner;