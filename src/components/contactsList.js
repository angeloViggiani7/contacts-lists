import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  EditButton,
} from "react-admin";

const ContactsList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" sortable={false} />
      <TextField source="name" />
      <TextField source="surname" />
      <TextField source="phone_number" sortable={false} />
      <TextField source="list_id" />
      <DeleteButton />
      <EditButton />
    </Datagrid>
  </List>
);

export default ContactsList;
