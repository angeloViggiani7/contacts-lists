import { Edit, SimpleForm, TextInput } from "react-admin";

const contactEdit = () => (
  <Edit title="Edit Contact">
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="surname" />
      <TextInput source="phone_number" />
    </SimpleForm>
  </Edit>
);

export default contactEdit;
