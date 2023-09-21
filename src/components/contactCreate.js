import React from "react";
import { Create, ReferenceInput, SimpleForm, TextInput } from "react-admin";

const contactCreate = () => (
  <Create title="Create a post">
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="surname" />
      <TextInput source="phone_number" />
      <ReferenceInput source="Listid" reference="list_id" />
    </SimpleForm>
  </Create>
);

export default contactCreate;
