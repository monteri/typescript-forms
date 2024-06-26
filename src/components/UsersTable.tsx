import React from 'react';

import useUsersTableStyles from './UsersTableStyles';
import { useAppSelector } from "../hooks";
import { getUsers } from "../data/selectors";
import {useQuery} from "react-query";
import {fetchPrices} from "../data/api.ts";

const UsersTable: React.FC = () => {
  const styles = useUsersTableStyles();
  const users = useAppSelector(getUsers)
  const { data } = useQuery('prices', fetchPrices);
  console.log('DIFFERENT', { data })
  console.log({ users })

  return (
    <table className={styles.table}>
      <thead>
      <tr>
        <th>Username</th>
        <th>Email</th>
      </tr>
      </thead>
      <tbody>
      {users.map((user: { username: string, email: string }) => (
        <tr key={user.email}>
          <td>{user.username}</td>
          <td>{user.email}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default UsersTable;