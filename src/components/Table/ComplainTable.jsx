import * as React from "react";
import PropTypes from "prop-types";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography, Paper, Select, MenuItem, Button, TablePagination } from "@mui/material";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: "email", numeric: false, disablePadding: true, label: "Email" },
  { id: "type", numeric: false, disablePadding: true, label: "Type" },
  { id: "request", numeric: false, disablePadding: false, label: "Complain/Feedback" },
  { id: "reply", numeric: false, disablePadding: false, label: "Reply" }, // New column for reply
];

function ComplainTableHead(props) {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <Typography variant="body1" noWrap>
              <strong>{headCell.label}</strong>
            </Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

ComplainTableHead.propTypes = {
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  onRequestSort: PropTypes.func.isRequired,
};

function ComplainTableToolbar(props) {
  const { onFilterChange } = props;
  const [filter, setFilter] = React.useState("");

  const handleFilterChange = (event) => {
    onFilterChange(event.target.value);
    setFilter(event.target.value);
  };

  return (
    <Toolbar>
      <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <Select
          value={filter}
          onChange={handleFilterChange}
          displayEmpty
          inputProps={{ "aria-label": "Filter by type" }}
        >
          <MenuItem value="">
            <em>All Types</em>
          </MenuItem>
          <MenuItem value="complaint">Complaint</MenuItem>
          <MenuItem value="feedback">Feedback</MenuItem>
        </Select>
      </Box>
    </Toolbar>
  );
}

ComplainTableToolbar.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default function ComplainTable({ data }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("email");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [filter, setFilter] = React.useState("");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const filteredData = React.useMemo(() => {
    if (!filter) {
      return data; // Return all data if no filter is selected
    } else {
      return data.filter((row) => row.type === filter); // Filter data based on the type
    }
  }, [filter, data]);

  const visibleRows = React.useMemo(
    () =>
      stableSort(filteredData, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [filteredData, order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Paper sx={{ width: "90%", mb: 2 }}>
        <ComplainTableToolbar onFilterChange={setFilter} />
        <TableContainer>
          <Table sx={{ minWidth: 70 }} aria-labelledby="tableTitle">
            <ComplainTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {visibleRows.length > 0 ? (
                visibleRows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>{row.request}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        sx={{background:"green"}}
                        onClick={() => window.open(`mailto:${row.email}`)}
                      >
                        Reply
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} sx={{ textAlign: "center" }}>
                    No data to display
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(event, newPage) => setPage(newPage)}
          onRowsPerPageChange={(event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
          }}
        />
      </Paper>
    </Box>
  );
}

ComplainTable.propTypes = {
  data: PropTypes.array.isRequired,
};
