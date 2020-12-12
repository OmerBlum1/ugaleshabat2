import React from 'react';
import addresses from '../../MockData/MockAddresses';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import AddressChooseDialog from './AddressChooseDialog';


const columns = [
  { id: 'firstName', label: 'שם פרטי', minWidth: 50 , align: 'right'},
  { id: 'lastName', label: 'שם משפחה', minWidth: 50 , align: 'right'},
  { id: 'city', label: 'עיר', minWidth: 50 , align: 'right'},
  { id: 'street', label: 'רחוב', minWidth: 50 , align: 'right'},
  { id: 'homenumber', label: 'מספר בית', minWidth: 50 , align: 'right'},
  { id: 'comments', label: 'הערות', minWidth: 10 , align: 'right'},
  { id: 'edit', label: 'עריכת כתובת', minWidth: 50, align: 'right'}
];

function createData(id, firstName, lastName, city, street, homenumber, comments) {
  return { id, firstName, lastName, city, street, homenumber, comments };
}

const rows = addresses.map((address) =>
    {
        return createData(address.id, address.firstName, address.lastName, address.city, address.street, address.homenumber, address.comments)
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

function AddressesTable() {
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
        <AddressChooseDialog rowId={rowId}/>
    );
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
              <h5>כתובות</h5>
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


export default AddressesTable;