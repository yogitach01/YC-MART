import MidSlide from './home/MidSlide';
import NavBar from "./home/NavBar";
import Banner from "./home/Banner";
import Slide from './home/Slide';
import { Box ,makeStyles,Typography} from "@material-ui/core";
import MidSection from './home/MidSection';
import { useSelector, useDispatch } from 'react-redux'; 
import { getProducts as listProducts } from '../redux/actions/productActions';
import React,  { useEffect } from 'react';
import Bottom from './home/Bottom';
import Footer from './home/Footer';
const useStyle = makeStyles({
    component: {
        padding: 10,
        background: ' #25395C'
    },
    text: {
        fontSize: 34,
        fontWeight: 600,
        fontFamily: 'inherit',
        textAlign:'center',
        backgroundColor: '#D2CCB1',
        marginLeft: 20
    }
})

const Home = () => {
    const classes = useStyle();

    const getProducts = useSelector(state => state.getProducts);
    const { products, error } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <NavBar />
            <Box className={classes.component}>
                <Banner />
                <MidSlide products={products} />
                <MidSection />
                <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
            </Box>
            <Typography className={classes.text}>Explore more categories </Typography>
            <Bottom/>
            <Footer/>
        </>
    )
}

export default Home;