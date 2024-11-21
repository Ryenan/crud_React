
import GlobalStyle from "./styles/global";
import Form from "./components/form.js";
import Grid from "./components/grid.js"
import { useState } from "react";
import { useGetUsers } from "./RoutesFunctions.js"
import { Container, Title} from "./styles/appStyles.js"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [users,usersSet] = useGetUsers();
  const [onEdit, setOnEdit] = useState();
   
  return (
    <>
      <Container>
        <Title>Usuários</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} useGetUsers={useGetUsers}/>
        <Grid users={users || []} usersSet={usersSet} setOnEdit={setOnEdit} />
        </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle/>
    </>
  );
}

export default App;
