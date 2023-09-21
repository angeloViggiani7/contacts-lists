import React from "react";
import { List, Datagrid, TextField } from "react-admin";

const ShowedList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" sortable={false} />
    </Datagrid>
  </List>
);

export default ShowedList;
