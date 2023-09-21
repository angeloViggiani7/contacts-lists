import React from "react";
import { List, Datagrid, TextField } from "react-admin";

const ContactsList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" sortable={false} />
      <TextField source="name" />
      <TextField source="surname" />
      <TextField source="phone_number" sortable={false} />
      <TextField source="list_id" />
    </Datagrid>
  </List>
);

export default ContactsList;
