import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Header, Button, Icon } from "semantic-ui-react";
import { getLeadsRequest, deleteLeadsRequest } from "../../redux/leads/actions";

const Leads = () => {
  const token = useSelector((state) => state.auth.token);
  const leads = useSelector((state) => state.leads.leads);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeadsRequest(token));
  }, []);

  return (
    <>
      <Header as="h2">Leads</Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Message</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {leads.map((lead) => (
            <Table.Row key={lead.id}>
              <Table.Cell>{lead.id}</Table.Cell>
              <Table.Cell>{lead.name}</Table.Cell>
              <Table.Cell>{lead.email}</Table.Cell>
              <Table.Cell>{lead.message}</Table.Cell>
              <Table.Cell>
                <Button
                  negative
                  onClick={() => dispatch(deleteLeadsRequest(lead.id, token))}
                >
                  <Icon name="delete" />
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default Leads;
