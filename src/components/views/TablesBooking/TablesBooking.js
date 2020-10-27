import React from 'react';
import styles from './TablesBooking.module.scss';
import { useParams } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const demoData = {
  table: '1',
  people: '3',
  date: '2020-05-17',
  time: '20:30',
  name: 'Mike Ross',
  thelephone: '535-564-467',
};

const TablesBooking = () => {
  const {id} = useParams();
  return (
    <Paper className={styles.component}>
      <div className={styles.header}>
        <h2>Tables reservation</h2>
        <h3>Nr: {id}</h3>
      </div>
      <Table>
        <TableHead>
          <TableCell>Table</TableCell>
          <TableCell>Amount of people</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Hour</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Phone</TableCell>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              {demoData.table}
            </TableCell>
            <TableCell>
              {demoData.people}
            </TableCell>
            <TableCell>
              <TextField
                id="date"
                type="date"
                value={demoData.date}
                className={styles.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </TableCell>
            <TableCell>
              <TextField
                id="time"
                type="time"
                value={demoData.time}
                className={styles.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </TableCell>
            <TableCell>
              {demoData.name}
            </TableCell>
            <TableCell>
              {demoData.thelephone}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className={styles.edit}>
        <Button>Edit</Button>
      </div>
    </Paper>

  );
};

export default TablesBooking;
