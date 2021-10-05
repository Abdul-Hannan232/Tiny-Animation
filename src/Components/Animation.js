import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import useWebAnimations from '@wellyshen/use-web-animations';


export default function Animation() {
    const [play, setPlay] = React.useState(1);

    const { ref, playState, getAnimation } = useWebAnimations({
        keyframes: [
            { transform: "translateY(0)" },
            { transform: "translateY(15px)" },
            { transform: "translateY(0)" }
        ],
        animationOptions: {
            duration: 1000,
            iterations: Infinity,
        }
    });

    const animPlay = () => {
        if(play===1)
        {
            setPlay(play+1);
            getAnimation().pause();
            console.log(play);
        }
        else{
            setPlay(play-1);
            getAnimation().play();
            console.log(play);
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}   >
            <Grid container spacing={2}>
                <Grid container item xs={12} md={6} justifyContent="center" alignContent="center" >
                    <div  elevation={0} >
                        <h1 className="h1">Animation <span onClick={animPlay} >{playState}</span></h1>
                        <h3 className="h3" >Enhance your developement with psychology-based UI and UX Developement</h3>
                    </div>
                    <div className="divbutton">
                        <Button href="https://www.github.com" target="_blank" variant="none" endIcon={<GitHubIcon />}>
                            Github
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} >
                    <div  style={{ position: "relative" }} elevation={0} >
                        <img ref={ref} style={{ position: "absolute" }} src="https://www.cortexcopywriter.com/img/intro/Intro_Brain.svg" alt="Brain Technology" 
                        />

                        <img style={{ position: "absolute" }} src="https://www.cortexcopywriter.com/img/intro/Intro_Front_Layer.svg" alt="Light Technology" />

                        <img src="https://www.cortexcopywriter.com/img/intro/Intro_Featured_Image_Empty.svg" alt="Animated Technology" />
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}

// https://www.cortexcopywriter.com/img/intro/Intro_Front_Layer.svg