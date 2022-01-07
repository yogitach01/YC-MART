import { Box, makeStyles, Grid } from '@material-ui/core';
import clsx from 'clsx';

const ImageURL = [
    'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/BAU/Homenew/Final/Restyle-your-home.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/BAU/Homenew/Final/Make-your-home-smart.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/BAU/Homenew/Final/Upgrade-your-home.jpg'
   

];

const useStyle = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between',
       
    },
    image: {
       
        height:'5'
    },
    help: {
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            height: 120
        }
    }
}));

const MidSection = () => {
    const classes = useStyle();
    const url = 'y3.jpg';
    const url2='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/BAU/Homenew/Final4/pc_1.jpg';
    const url3='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/BAU/Homenew/Final4/pc_4.jpg';
    const url4='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/BAU/Homenew/Final4/pc_2.jpg';
    const url5='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/BAU/Homenew/Final4/pc_3.jpg';
    return (
        <>
            <Grid lg={12} sm={12} md={12} xs={12} container className={classes.wrapper}>
                {
                    ImageURL.map(image => (
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <img src={image} className={classes.image} />
                        </Grid>
                    ))
                }
            </Grid>
            <img src={url} className={clsx(classes.wrapper, classes.help)} style={{width:'100%',height:550}} />
            <img src={url2} className={clsx(classes.wrapper, classes.help)} style={{width:'100%'}} />
            <img src={url3} className={clsx(classes.wrapper, classes.help)} style={{width:'100%'}} />
            <img src={url4} className={clsx(classes.wrapper, classes.help)} style={{width:'100%'}} />
            <img src={url5} className={clsx(classes.wrapper, classes.help)} style={{width:'100%'}} />
        </>
    )
}

export default MidSection;