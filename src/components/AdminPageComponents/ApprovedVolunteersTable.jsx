import React from 'react';
import registeredVolunteers from '../../MockData/MockApprovedVolunteers';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import VolunteerChooseDialog from './VolunteerChooseDialog';

const columns = [
  { id: 'firstName', label: 'שם פרטי', minWidth: 100 , align: 'right'},
  { id: 'lastName', label: 'שם משפחה', minWidth: 100 , align: 'right'},
  { id: 'age', label: 'גיל', minWidth: 100 , align: 'right'},
  { id: 'phoneNumber', label: 'טלפון', minWidth: 100, align: 'right'},
  { id: 'VolunteeringTimes', label: 'מספר התנדבויות', minWidth: 100 , align: 'right'},
  { id: 'strikes', label: 'מספר ביטולים', minWidth: 100, align: 'right'},
  { id: 'edit', label: 'עריכת מתנדב', minWidth: 50, align: 'right'}
];

function createData(id, firstName, lastName, age,VolunteeringTimes, strikes, phoneNumber) {
  return { id, firstName, lastName, age, VolunteeringTimes, strikes, phoneNumber };
}

const rows = registeredVolunteers.map((user) => 
    {
        return createData(user.id, user.firstName, user.lastName, user.age, user.VolunteeringTimes, user.strikes, user.phoneNumber)
    }
);

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

function chooseButton(rowId){
  console.log({rowId});
  return(
      <VolunteerChooseDialog rowId={rowId}/>
  );
}

function RegisteredVolunteersTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
              <h5>מתנדבים קיימים</h5>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ?
                        column.format(value) : 
                        (column.id === 'edit' ?
                          chooseButton(row.id) 
                          : value)}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}


export default RegisteredVolunteersTable;