import React, { useState } from "react";
import { Container } from "semantic-ui-react";

import Form from './Form'
import Leads from './Leads'

const Dashboard = () => {
  return (
    <Container style={{ marginTop: '7em' }}>
      <Form />
      <Leads />
    </Container>
  );
};

export default Dashboard;
