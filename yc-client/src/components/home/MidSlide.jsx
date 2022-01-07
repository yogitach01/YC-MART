import { Box, makeStyles } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import Slide from './Slide';

const useStyle = makeStyles(theme => ({
    component: {
        display: 'flex'
    },
    leftComponent: {
        width: '83%',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
   
    rightComponent: {
        marginTop: 12,
        background: ' #25395C',
        width: '17%',
        marginLeft: 10,
        padding: 5,
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }
}));

const MidSlide = ({ products }) => {
    const classes = useStyle();
    const adURL = 'https://th.bing.com/th/id/OIP.C2YnuF9SaTz6D5WPoLWUXAHaK1?w=206&h=302&c=7&r=0&o=5&dpr=1.25&pid=1.7';

    return (
        <Box className={classes.component}>
            <Box className={classes.leftComponent}>
                <Slide 
                    data={products} 
                    title='Deals of the Day'
                    timer={true} 
                    multi={true} 
                />
            </Box>
            <Box className={classes.rightComponent}>
                <img src={adURL} className={classes.mp} style={{width: 250, height:395}}/>
            
                
            </Box>
        </Box>
    )
}

export default MidSlide;