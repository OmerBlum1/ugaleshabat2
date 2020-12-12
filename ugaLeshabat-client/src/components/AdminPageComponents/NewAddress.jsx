import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  placeholder: {
      textAlign: "right",
  }
}));

export default function NewAddress() 
{
    const [state, setState] = React.useState({
        Kosher: false,
        Parve: false,
        Vegan: false,
        SugarFree: false,
        GlutenFree: false,
        NutsFree: false,
        PenutsFree: false,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    
      function handleSubmit(event)
      {
          alert(`נוספה כתובת חדשה\n ${event.target.privateName.value} ${event.target.lastName.value}, ${event.target.NumOfPepole.value} אנשים. ${event.target.City.value} ${event.target.Street.value} ${event.target.HouseNumber.value}\n.להלן הרגישויות/דרישות ייחודיות: כשר ${state.Kosher}, טבעוני: ${state.Vegan}, פרווה: ${state.Parve}`);
      }


    const classes = useStyles();
    return (
        <div class="text-right">
            <Paper className={classes.root}>
                <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                    <h5>הוספת כתובת חדשה</h5>
                    <Input name="privateName" placeholder="שם פרטי" inputProps={{ 'aria-label': 'description' }} />
                    <Input name="lastName" placeholder="שם משפחה" inputProps={{ 'aria-label': 'description' }} />
                    <Input name="NumOfPepole" placeholder="מספר אנשים" inputProps={{ 'aria-label': 'description' }} />
                    <Input name="City" placeholder="עיר" inputProps={{ 'aria-label': 'description' }} />
                    <Input name="Neighberhood" placeholder="שכונה" inputProps={{ 'aria-label': 'description' }} />
                    <Input name="Street" placeholder="רחוב" inputProps={{ 'aria-label': 'description' }} />
                    <Input name="HouseNumber" placeholder="מספר בית" inputProps={{ 'aria-label': 'description' }} />
                    <Input name="PhoneNumber" placeholder="טלפון" inputProps={{ 'aria-label': 'description' }} />                    
                    <Input name="Comments" placeholder="הערות" inputProps={{ 'aria-label': 'description' }} />
                    <FormGroup row class="text-right">
                        <FormControlLabel labelPlacement="start" control={ <Checkbox checked={state.Kosher} onChange={handleChange} name="Kosher" color="primary" />} label="כשר" />
                        <FormControlLabel labelPlacement="start" control={ <Checkbox checked={state.Parve} onChange={handleChange} name="Parve" color="primary" />} label="פרווה" />    
                        <FormControlLabel labelPlacement="start" control={ <Checkbox checked={state.Vegan} onChange={handleChange} name="Vegan" color="primary" />} label="טבעוני" />               
                        <FormControlLabel labelPlacement="start" control={ <Checkbox checked={state.SugarFree} onChange={handleChange} name="SugarFree" color="primary" />} label="ללא סוכר" />
                        <FormControlLabel labelPlacement="start" control={ <Checkbox checked={state.GlutenFree} onChange={handleChange} name="GlutenFree" color="primary" />} label="ללא גלוטן" />    
                        <FormControlLabel labelPlacement="start" control={ <Checkbox checked={state.NutsFree} onChange={handleChange} name="NutsFree" color="primary" />} label="ללא אגוזים" />    
                        <FormControlLabel labelPlacement="start" control={ <Checkbox checked={state.PenutsFree} onChange={handleChange} name="PenutsFree" color="primary" />} label="ללא בוטנים" />                 
                    </FormGroup>
                    <br/>
                    <Fab type="submit" color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </form>
            </Paper>        
        </div>
    
  );
}