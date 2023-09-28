import { Edit, SimpleForm, TextInput } from "react-admin";

const contactEdit = () => (
  <Edit title="Edit List">
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export default contactEdit;
