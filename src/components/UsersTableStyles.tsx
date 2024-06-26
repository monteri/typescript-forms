import { makeStyles } from '@fluentui/react-components';

const useUsersTableStyles = makeStyles({
  table: {
    marginTop: '1rem',
    width: '100%',
    borderCollapse: 'collapse',
    '& th, & td': {
      border: '1px solid #ddd',
      padding: '8px',
    },
    '& th': {
      backgroundColor: '#f2f2f2',
    },
    '& tr:nth-child(even)': {
      backgroundColor: '#f9f9f9',
    },
    '& tr:hover': {
      backgroundColor: '#f1f1f1',
    },
  },
});

export default useUsersTableStyles;