
import  {navData}  from '../../data';
import { Box, Typography ,makeStyles} from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    tp: {
        display: 'flex',
        
        justifyContent: 'space-between',
     
        backgroundColor: '#D2CCB1',
        overflowX: 'overlay',
     
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    container: {
        padding: '12px 8px',
        textAlign: 'center'
    },
    image: {
        width: 65
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'inherit'
    }
}));

const NavBar = () => {
    const classes = useStyle();
    return (
        <Box className={classes.tp}>
            {
                navData.map(temp => (
                    <Box className={classes.container}>
                        <img src={temp.url} className={classes.image} />
                        <Typography className={classes.text}>{temp.text}</Typography>
                    </Box>
                ))
            }
        </Box>
    )
}

export default NavBar;