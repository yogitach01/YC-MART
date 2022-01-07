import  {yudata}  from '../../data';
import { Box, Typography ,makeStyles,Grid} from '@material-ui/core';
import clsx from 'clsx';


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
        width: 235
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'inherit',
        textAlign:'center',
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between',
        marginLeft: 20
    },
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between',
       backgroundColor:'#25395C',
    }
}));
const ImageURL = [
    'https://images-na.ssl-images-amazon.com/images/G/31/img2020/OHL/Mar_HSS/Covid_390x498._CB657082090_.gif',
    'https://images-na.ssl-images-amazon.com/images/G/31/img2020/OHL/Mar_HSS/Cleaning_390x498._CB657082090_.gif',
    'https://images-na.ssl-images-amazon.com/images/G/31/img2020/OHL/Mar_HSS/Painting_390x498._CB657082091_.gif',
    'https://images-na.ssl-images-amazon.com/images/G/31/img2020/OHL/Mar_HSS/Bath_390x498._CB657082090_.gif',
    'https://images-na.ssl-images-amazon.com/images/G/31/img2020/OHL/Mar_HSS/Bike_390x498._CB657082090_.gif',
    'https://images-na.ssl-images-amazon.com/images/G/31/img2020/OHL/Mar_HSS/Car-parts_390x498._CB657082090_.gif',
    'https://images-na.ssl-images-amazon.com/images/G/31/img2020/OHL/Mar_HSS/Exercise_390x498._CB657082090_.gif',
   

];
const url='https://images-eu.ssl-images-amazon.com/images/G/31/img2020/OHL/Mar_HSS/Clearance_1500x300_gifud.gif';
const Bottom = () => {
    const classes = useStyle();
    return (
        <>
        <Box className={classes.tp}>
           
            {

                yudata.map(temp => (
                    <>
                   
                    
                    <Box className={classes.container}>
                        <img src={temp.url} className={classes.image} />
                        
                    </Box>
                    </>
                ))
            }

          
        </Box>
<Box className={classes.tp}>

 <img src={url} className={clsx(classes.wrapper, classes.help)} style={{width:'100%'}} />
 </Box>
</>
    )
}


export default Bottom;