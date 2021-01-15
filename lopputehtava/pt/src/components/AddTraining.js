import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import moment from 'moment';

function AddTraining(props) {
  const [training, setTraining] = useState({
    activity: '',
    duration: '',
    date: '',
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setTraining({ ...training, customer: props.params.value });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const inputChanged = (event) => {
    setTraining({ ...training, [event.target.name]: event.target.value });
  };

  const handleSave = () => {
    props.addTraining({
      ...training,
      date: moment(training.date._d).toISOString(),
    });
    handleClose();
  };

  return (
    <div>
      <Button size="small" color="primary" onClick={handleClickOpen}>
        Add Training
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Training</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Activity"
            name="activity"
            value={training.activity}
            onChange={inputChanged}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Date"
            name="date"
            value={training.date}
            onChange={inputChanged}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Duration"
            name="duration"
            value={training.duration}
            onChange={inputChanged}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddTraining;
