import { makeStyles } from '@material-ui/styles';

export const useIndentStyles = makeStyles(theme => ({
  main: {
    '@media (min-width: 1366px)': {
      padding: '0 calc((100% - 1300px) / 2) !important'
    }
  }
}));
