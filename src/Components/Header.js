import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const styleHeader = {
    marginBottom: "2%",
    fontSize: "30px",
    padding: "2% 0"
}


function Header() {
    
    return (
        <Paper elevation={1} >
            <Grid className="linear" container justifyContent="center" style={styleHeader} >
                <Grid item >
                    <span className="rainbow1" >T</span>
                    <span className="rainbow2" >i</span>
                    <span className="rainbow3" >n</span>
                    <span className="rainbow4" >y</span>
                    <span> </span>
                    <span className="rainbow5" >A</span>
                    <span className="rainbow6" >n</span>
                    <span className="rainbow7" >i</span>
                    <span className="rainbow8" >m</span>
                    <span className="rainbow9" >a</span>
                    <span className="rainbow10" >t</span>
                    <span className="rainbow11" >i</span>
                    <span className="rainbow12" >o</span>
                    <span className="rainbow13" >n</span>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Header;
