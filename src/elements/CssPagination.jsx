import {
  withStyles,
} from '@material-ui/core/styles';

import Pagination from '@material-ui/lab/Pagination';

const CssPagination = withStyles({
  root: {
    '& .MuiPagination-ul': {
      '& .Mui-selected': {
        backgroundColor: '#A03037',
      },
    },
  },
})(Pagination);

export default CssPagination;