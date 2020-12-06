import React from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import '../../CSSFiles/MatchApprovementDialogSlide.css';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ResetMatchingsTable(){
    const [open, setOpen] = React.useState(false);



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <a>
                <button type="button" class="btn btn-outline-secondary" onClick={handleClickOpen}>
                    איפוס טבלת שיבוצים
                </button>
            </a>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title" className='text'>{"האם לאפס את טבלת השיבוצים?"}</DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        אפס את הטבלה
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        אל תאפס את הטבלה
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


export default ResetMatchingsTable;