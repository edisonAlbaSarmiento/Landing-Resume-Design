/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {
  ButtonOpen,
  TextButton,
} from './style';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: '#281c36',
    color: '#ff67b6'
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, ...other } = props;
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: '#241d2e',
    color: 'white',
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    backgroundColor: '#281c36',
    color: 'white',
  },
}))(MuiDialogActions);

function CustomizedDialogs({
  children,
  title,
  activeButton,
  selectedLanguage,
  onClickActive
}) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    onClickActive();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ButtonOpen  activeButton={activeButton} onClick={handleClickOpen}>
        <TextButton>
          {selectedLanguage === 0 ? 'Know more': 'Saber más'}
        </TextButton>
      </ButtonOpen>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {title}
        </DialogTitle>
        <DialogContent dividers='body'>
          {children}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} style={{color: '#ff67b6'}}>
            {selectedLanguage === 0 ? 'Read': 'Leído'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

CustomizedDialogs.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  activeButton: PropTypes.bool.isRequired,
  onClickActive: PropTypes.func.isRequired,
}

export default CustomizedDialogs;
