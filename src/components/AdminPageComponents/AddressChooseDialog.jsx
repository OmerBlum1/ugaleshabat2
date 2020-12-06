import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Addresses from "../../MockData/MockAddresses";
import '../../CSSFiles/MatchApprovementDialogSlide.css';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function DialogMessage({addresses = {}}){
    return(
        <p className='text'> <h3>{addresses.firstName} {addresses.lastName}</h3><br/>
            בקרוב נאפשר לערוך את פרטי הכתובת
        </p>

    );
}



function AddressChooseDialog({ rowId }){
    const [open, setOpen] = React.useState(false);

    const addresses = Addresses[rowId];


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
                    בחר
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
                <DialogTitle id="alert-dialog-slide-title" className='text'>{"עדכון פרטי כתובת"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <DialogMessage
                        addresses={addresses}/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        אישור השינויים
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        ביטול
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


export default AddressChooseDialog;