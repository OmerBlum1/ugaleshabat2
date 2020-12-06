import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import matches from '../../MockData/Matchings';
import '../../CSSFiles/MatchApprovementDialogSlide.css';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function DialogMessage({match = {}}){
    return(
    <p className='text'> האם לבטל את השיבוץ של המתנדב/ת {match.volunteer.firstName} {match.volunteer.lastName} אצל {match.address.firstName} {match.address.lastName}?<br/>
            בקרוב נאפשר לבטל את השיבוץ
        </p>

    );
}



function MatchChooseDialog({ rowId }){
    const [open, setOpen] = React.useState(false);

    const match = matches[rowId];


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <a>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    בטל
                </Button>
            </a>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title" className='text'>{"ביטול שיבוץ"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <DialogMessage
                        match={match}/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        בטל את השיבוץ
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        אל תבטל את השיבוץ
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


export default MatchChooseDialog;