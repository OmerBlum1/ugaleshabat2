import React from "react";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import MatchApprovementDialogSlide from './MatchApprovementDialogSlide';


const columns = [
  { id: "city", label: "עיר", minWidth: 170 },
  { id: "neighborhood", label: "איזור", minWidth: 100 },
  {
    id: "properties",
    label: "מאפייני העוגה",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "howmanypeople",
    label: "מס' העוגות",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "comments",
    label: "הערות",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id:"choose",
    label: "בחירת כתובת",
    minWidth: 50,
  }
];

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

function createRow(
    id,
    city,
    neighborhood,
    kosher,
    parve,
    vegan,
    sugerfree,
    lactosefree,
    glutenfree,
    peanutfree,
    nutsfree,
    howmanypeople,
    comments
) {
  let properties = buildPropertiesString(
      kosher,
      parve,
      vegan,
      sugerfree,
      lactosefree,
      glutenfree,
      peanutfree,
      nutsfree);

  return { city, neighborhood, properties, howmanypeople, comments, id };
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Assistant'],
  }
});

function MatchingTable({ addresses = [] }) {
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

  const rows = addresses.map((address) => {
    return createRow(
        address.id,
        address.city,
        address.neighborhood,
        address.kosher,
        address.parve,
        address.vegan,
        address.sugerfree,
        address.lactosefree,
        address.glutenfree,
        address.peanutfree,
        address.nutsfree,
        address.howmanypeople,
        address.comments
    );
  });

  function chooseButton(rowId){
    return(
        <MatchApprovementDialogSlide
        rowId={rowId}/>
    );
  }


  return (
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                    <TableCell
                        key={column.id}
                        align={"right"}
                        style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                                <TableCell key={column.id} align={"right"}>
                                  {column.format && typeof value === "number"
                                      ? column.format(value)
                                      : (column.id === 'choose'?chooseButton(row.id):value)}
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
