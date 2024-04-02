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
import { Discipline } from './types/constants';
import type { Item } from './types';
import { useTranslation } from 'react-i18next';
interface TrackerTableProps {
  items: Item[];
}

const TrackerTable = ({ items }: TrackerTableProps) => {
  const { t } = useTranslation();
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
      <TableCell>{t('sum')}</TableCell>
      <TableCell>
        {calculateTotalTimeSpent(items, Discipline.english)}
      </TableCell>
      <TableCell>{calculateTotalTimeSpent(items, Discipline.IT)}</TableCell>
    </TableRow>
  );
  const averageRow = (
    <TableRow>
      <TableCell>{t('average')}</TableCell>
      <TableCell>
        {calculateAverageTimeSpent(items, Discipline.english)}
      </TableCell>
      <TableCell>{calculateAverageTimeSpent(items, Discipline.IT)}</TableCell>
    </TableRow>
  );
  return (
    <div className="tracker">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{t('date')}</TableCell>
              <TableCell>{t('time_spent_english')}</TableCell>
              <TableCell>{t('time_spent_it')}</TableCell>
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
