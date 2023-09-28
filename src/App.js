import { Admin, Resource } from "react-admin";
import { authProvider } from "./authProvider";
import SheetDbDataProvider from "angelo-api-google";
import ContactsList from "./components/contactsList";
import contactEdit from "./components/contactEdit";
import contactCreate from "./components/contactCreate";
import listCreate from "./components/listCreate";
import listEdit from "./components/listEdit";
import ShowedList from "./components/showedList";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

function App() {
  return (
    <Admin dataProvider={SheetDbDataProvider} authProvider={authProvider}>
      <Resource
        name="list"
        list={ShowedList}
        edit={listEdit}
        create={listCreate}
      />
      <Resource
        icon={ContactPhoneIcon}
        name="list_item"
        list={ContactsList}
        edit={contactEdit}
        create={contactCreate}
      />
    </Admin>
  );
}

export default App;
