
import GlobalStyle from "./styles/global";
import Form from "./components/form.js";
import Grid from "./components/grid.js"
import { useGetUsers } from "./RoutesFunctions.js"
import { Container, Title} from "./styles/appStyles.js"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const users = useGetUsers()
   
  return (
    <>
      <Container>
        <Title>Usuários</Title>
        <Form/>
        <Grid users={users}></Grid>
      </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle/>
    </>
  );
}

export default App;
