import React from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const userData = [
  { name: 'Bharath Reddy', email: 'bharath@gmail.com', role: 'Admin' },
  { name: 'Vinay Reddy', email: 'vinay@gmail.com', role: 'User' },
  { name: 'Amarnath Reddy', email: 'amarnath@gmail.com', role: 'Moderator' },
];

const Users = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Users
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Users;
