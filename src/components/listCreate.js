import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const contactCreate = () => (
  <Create title="Create a new list">
    <SimpleForm>
      <TextInput source="name" required />
    </SimpleForm>
  </Create>
);

export default contactCreate;
