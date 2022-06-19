import React from "react";
import PropTypes from "prop-types";
import {
  Card as MaterialCard,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button
} from "@mui/material";

const Card = ({ image, title, content }) => {
  return (
    <MaterialCard sx={{ maxWidth: 345, minWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt="img" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </MaterialCard>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  image: "https://rsjsh.co.id/public/images/thumbnail.svg",
};

export default Card;
