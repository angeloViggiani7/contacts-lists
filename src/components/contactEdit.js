import { Edit, SimpleForm, TextInput } from "react-admin";

const contactEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="surname" />
      <TextInput source="number" />
    </SimpleForm>
  </Edit>
);

export default contactEdit;