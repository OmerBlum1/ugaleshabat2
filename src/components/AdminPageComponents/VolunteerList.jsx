import React from 'react';
import mockVolunteers from '../../MockData/MockVolunteers';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function VolunteerList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
      <div>
        <List className={classes.root} >
            <h5>
                מתנדבים חדשים שטרם אושרו
            </h5>
            {mockVolunteers.map((user) => 
            {
                const labelId = `checkbox-list-label-${user}`;
                return (
                <ListItem key={user.id} role={undefined} dense button onClick={handleToggle(user)}>
                    <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked.indexOf(user) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`${user.lastName +" " + user.firstName + " ," + user.phoneNumber}`} />
                    <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="comments">
                    </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                );
            })}
            <Button className="center" variant="outlined" color="primary" >
                 אישור
            </Button>
        </List>
      </div>
    
  );
}

export default VolunteerList;