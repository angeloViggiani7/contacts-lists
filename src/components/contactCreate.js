import React from "react";
import { Create, ReferenceInput, SimpleForm, TextInput } from "react-admin";

const contactCreate = () => (
  <Create title="Create a contact">
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="surname" />
      <TextInput source="phone_number" />
      <ReferenceInput source="list_id" reference="list" />
    </SimpleForm>
  </Create>
);

export default contactCreate;
