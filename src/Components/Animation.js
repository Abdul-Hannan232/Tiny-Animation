import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import useWebAnimations from '@wellyshen/use-web-animations';


export default function Animation() {

    const { ref, playState, getAnimation } = useWebAnimations({
        keyframes: [
            { transform: "translateY(0)" },
            { transform: "translateY(15px)" },
            { transform: "translateY(0)" }
        ],
        animationOptions: {
            duration: 1000,
            iterations: Infinity,
            // direction: "alternate"
        }
    });

    return (
        <Box sx={{ flexGrow: 1 }}   >
            <Grid container spacing={2}>
                <Grid container item xs={12} md={6} justifyContent="center" alignContent="center" >
                    <div  elevation={0} >
                        <h1 className="h1">Animation Developement</h1>
                        <h3 className="h3" >Enhance your communications with psychology-based UI and UX Developement</h3>
                    </div>
                    <div className="divbutton">
                        <Button href="https://www.github.com" target="_blank" variant="none" endIcon={<GitHubIcon />}>
                            Github
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} >
                    <div  style={{ position: "relative" }} elevation={0} >
                        <img ref={ref} style={{ position: "absolute" }} src="https://www.cortexcopywriter.com/img/intro/Intro_Brain.svg" alt="Brain Technology" />

                        <img style={{ position: "absolute" }} src="https://www.cortexcopywriter.com/img/intro/Intro_Front_Layer.svg" alt="Light Technology" />

                        <img src="https://www.cortexcopywriter.com/img/intro/Intro_Featured_Image_Empty.svg" alt="Animated Technology" />
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}

// https://www.cortexcopywriter.com/img/intro/Intro_Front_Layer.svg