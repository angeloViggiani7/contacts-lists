import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  EditButton,
} from "react-admin";

const ShowedList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" sortable={false} />
      <DeleteButton />
      <EditButton />
    </Datagrid>
  </List>
);

export default ShowedList;
