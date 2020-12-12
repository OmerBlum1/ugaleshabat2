import React from 'react';
import matches from '../../MockData/Matchings';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import MatchChooseDialog from './MatchChooseDialog';

const columns = [
  { id: 'addFirstName', label: 'שם פרטי', minWidth: 100 , align: 'right'},
  { id: 'addLastName', label: 'שם משפחה', minWidth: 100 , align: 'right'},
  { id: 'addPhoneNumber', label: 'טלפון', minWidth: 100, align: 'right'},
  { id: 'addCity', label: 'עיר', minWidth: 100 , align: 'right'},
  { id: 'addNeigh', label: 'שכונה', minWidth: 100, align: 'right'},
  { id: 'volFirstName', label: 'שם פרטי', minWidth: 100 , align: 'right'},
  { id: 'volLastName', label: 'שם משפחה', minWidth: 100 , align: 'right'},
  { id: 'volPhoneNumber', label: 'טלפון', minWidth: 100, align: 'right'},
  { id: 'edit', label: 'עריכת כתובת', minWidth: 50, align: 'right'}
];

function createData(id, addFirstName, addLastName, addPhoneNumber, addCity, addNeigh, volFirstName, volLastName, volPhoneNumber) {
  return { id, addFirstName, addLastName, addPhoneNumber, addCity, addNeigh, volFirstName, volLastName, volPhoneNumber };
}

const rows = matches.map((match) => 
    {
        return createData(match.id, match.address.firstName, match.address.lastName, match.address.phone, match.address.city, match.address.neighborhood, match.volunteer.firstName, match.volunteer.lastName, match.volunteer.phoneNumber)
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

function MatchingTable() {
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

  function chooseButton(rowId)
  {
    console.log({rowId});
    return(
        <MatchChooseDialog rowId={rowId}/>
    );
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
                <h5>שיבוצים לשבוע הקרוב</h5>
                <TableRow>
                    <TableCell align="center" colSpan={5}>פרטי הכתובת</TableCell>
                    <TableCell align="right" colSpan={3}>פרטי המתנדב</TableCell>
                </TableRow>
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
                        {column.format && typeof value === 'number' 
                        ? column.format(value) 
                        : (column.id === 'edit' 
                          ? chooseButton(row.id) 
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


export default MatchingTable;