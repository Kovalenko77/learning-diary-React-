import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableFooter from '@mui/material/TableFooter';
import { calculateTotalTimeSpent, calculateAverageTimeSpent } from './utils';
import { Item } from './types';
import { Discipline } from './types/constants';

interface TrackerTableProps {
  items: Item[];
}

const TrackerTable = ({ items }: TrackerTableProps) => {
  let tableRowDataArr = items.map(function (item) {
    return (
      <TableRow key={item.id}>
        <TableCell>{item.date}</TableCell>
        <TableCell>{item.data.english.timeSpent}</TableCell>
        <TableCell>{item.data.IT.timeSpent}</TableCell>
      </TableRow>
    );
  });
  const summaryRow = (
    <TableRow>
      <TableCell>Sum</TableCell>
      <TableCell>{calculateTotalTimeSpent(items, Discipline.english)}</TableCell>
      <TableCell>{calculateTotalTimeSpent(items, Discipline.IT)}</TableCell>
    </TableRow>
  );
  const averageRow = (
    <TableRow>
      <TableCell>Average</TableCell>
      <TableCell>{calculateAverageTimeSpent(items, Discipline.english)}</TableCell>
      <TableCell>{calculateAverageTimeSpent(items, Discipline.IT)}</TableCell>
    </TableRow>
  );
  return (
    <div className="tracker">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>TimeSpentEnglish</TableCell>
              <TableCell>TimeSpentIT</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{tableRowDataArr}</TableBody>
          <TableFooter className="table-footer">
            {summaryRow}
            {averageRow}
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TrackerTable;
