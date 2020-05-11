import {
    withStyles,  
  } from '@material-ui/core/styles';

  import Pagination from '@material-ui/lab/Pagination';
 
  
  
  const CssPagination = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#0a0102',
      },
      // '& .MuiInput-underline:after': {
      //   borderBottomColor: 'green',
      // },
      '& .MuiPagination-root': {

        '& ul': {
            backgroundColor: '#A03037',
        }
        // '& fieldset': {
        //   borderColor: '#DCDCDC',
        // },
        // '&:hover fieldset': {
        //   borderColor: '#0a0102',
        // },
        // '&.Mui-focused fieldset': {
        //   borderColor: '#A03037',
        // },
        // '&.Mui-error fieldset': {
        //   border: '1px solid red',
        // },
      },
    },
  })(Pagination);
  
  export default CssPagination;