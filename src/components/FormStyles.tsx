import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    ...shorthands.border('1px', 'solid', '#ddd'),
    ...shorthands.borderRadius('8px'),
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  fieldContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  errorMessage: {
    color: 'red',
    fontSize: '12px',
  },
  button: {
    alignSelf: 'center',
  },
});

export default useStyles;
