import { makeStyles, Typography, Box,Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
const useStyle = makeStyles({
    component: {
        width: '80%%',
        height: '65vh',
        background: ' #D2CCB1',
        margin: '80px 140px'
    },
    image: {
        width: '15%'
    },
    container: {
        textAlign: 'center',
        paddingTop: 70
    },
    conatined:{

        textAlign: 'center',
        paddingTop: 70,
        background: 'blue',
        color: 'white',
        margin: '80px 140px',
        width: '80%%',
        height: '65vh',
        marginTop:20
    },
    bu:{
        background:'tomato'
    }
})


const EmptyCart = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    const classes = useStyle();
    const history=useHistory();
const addItem =() =>{
history.push('/');
}
    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                <img src={imgurl} className={classes.image} />
                <Typography>Your cart is empty!</Typography>
                <Button varient ="conatined" className={classes.bu} onClick={()=> addItem()}>  Shop now</Button>
                <Typography>Add items to it now.</Typography>
               
            </Box>
            
        </Box>
    )
}

export default EmptyCart;