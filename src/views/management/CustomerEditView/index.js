import React, {
  useState,
  useCallback,
  useEffect
} from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import axios from 'src/utils/axios';
import Page from 'src/components/Page';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import CustomerEditForm from './CustomerEditForm';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function CustomerEditView() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [customer, setCustomer] = useState();

  const getCustomer = useCallback(() => {
    if (isMountedRef.current) {
      setCustomer({
        fullName: 'Ekaterina Tankova',
        email: 'ekaterina@devias.io',
        phone: '+55 748 327 439',
        state: 'Alabama',
        country: 'United States',
        zipCode: '240355',
        address1: 'Street John Wick, no. 7',
        address2: 'House #25',
        creditCard: '4142 **** **** **** ****',
        autoCC: false,
        verified: true,
        currency: '$',
        vat: 19,
        balance: 0
      })
    }
    // axios
    //   .get('/api/management/companies/1')
    //   .then((response) => {
    //     if (isMountedRef.current) {
    //       setCustomer(response.data.customer);
    //     }
    //   });
  }, [isMountedRef]);

  useEffect(() => {
    getCustomer();
  }, [getCustomer]);

  if (!customer) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Customer Edit"
    >
      <Container maxWidth="lg">
        <Header />
        <Box mt={3}>
          <CustomerEditForm customer={customer} />
        </Box>
      </Container>
    </Page>
  );
}

export default CustomerEditView;
