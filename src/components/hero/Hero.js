import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://miro.medium.com/max/1400/0*hDAyhnOx767w5qma.jpg')`,
    height: '500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  heroText: {
    fontWeight: 700,
    letterSpacing: ".3rem",
  }
});

const Hero = () => {
  const styles = useStyles();

  return (
    <Box className={styles.hero}>
      <Typography variant="h6" className={styles.heroText}>Think Differently</Typography>
    </Box>
  );
};

export default Hero;
