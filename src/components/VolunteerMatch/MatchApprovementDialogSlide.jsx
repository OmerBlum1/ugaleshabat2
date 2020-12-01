import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Addresses from "../../MockData/MockAddresses";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

//TODO: this function is written in 2 places! should be exported
function  buildPropertiesString(kosher, parve, vegan, sugerfree, lactosefree, glutenfree, peanutfree, nutsfree){
    let properties = "עוגה ";
    if (kosher) properties = properties.concat("כשרה, ");
    if (parve) properties = properties.concat("פרווה, ");
    if (vegan) properties = properties.concat("טבעונית, ");
    if (sugerfree) properties = properties.concat("ללא סוכר, ");
    if (lactosefree) properties = properties.concat("ללא לקטוז, ");
    if (glutenfree) properties = properties.concat("ללא גלוטן, ");
    if (peanutfree) properties = properties.concat("ללא בוטנים, ");
    if (nutsfree) properties = properties.concat("ללא אגוזים, ");
    const propertiesLength = properties.length;
    if (propertiesLength > 5) {
        properties = properties.slice(0, propertiesLength - 2);
    } else {
        properties = "";
    }
    return properties;
}

function DialogMessage({address = {}}){
    return(
        <p>אנחנו רואים שמצאת את הכתובת שתזכה לקבל את העוגה שלך, איזה כיף!<br/>
            כעת, כל שנותר הוא לאשר את פרטי השיבוץ, ולאפות עוגה:)<br/>
            עיר: {address.city}<br/>
            איזור: {address.neighborhood}<br/>
            מס' העוגות: {address.howmanypeople}<br/>
            הערות בנוגע לעוגה: {buildPropertiesString(address.kosher,
                address.parve,
                address.vegan,
                address.sugerfree,
                address.lactosefree,
                address.glutenfree,
                address.peanutfree,
                address.nutsfree,)}<br/>
            {address.comments}<br/>
            את הפרטים המדוייקים של הכתובת תקבל רק לאחר אישור השיבוץ, מטעמי פרטיות. <br/>
        </p>

    );
}

function MatchApprovementDialogSlide({ rowId }){
    const [open, setOpen] = React.useState(false);

    const address = Addresses[rowId];


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
                <DialogTitle id="alert-dialog-slide-title">{"אישור סופי לשיבוץ הכתובת"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <DialogMessage
                        address={address}/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        אני מאשר
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        אני צריך עוד רגע לחשוב על זה..
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


export default MatchApprovementDialogSlide;