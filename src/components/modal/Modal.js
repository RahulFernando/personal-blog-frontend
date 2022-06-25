import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";

const Modal = ({ open, title, button, children, onSubmit, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <Divider />
      <form onSubmit={onSubmit}>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button
            sx={{ textTransform: "none" }}
            variant="outlined"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            sx={{ textTransform: "none" }}
            type="submit"
            variant="contained"
          >
            {button}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

Modal.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
  button: PropTypes.string,
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  open: false,
  button: "Save",
  onSubmit: () => {},
  onClose: () => {},
};

export default Modal;
