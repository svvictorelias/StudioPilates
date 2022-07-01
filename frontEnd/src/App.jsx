import { GlobalStyle } from './styles/global'
import { BrowserRouter} from "react-router-dom";
import AppRoutes from './routes/appRoutes';
import Footer from './components/footer';
import { AuthProvider } from './Provider/Signup.provider';

function App() {
  return (
    
    <AuthProvider>
      <GlobalStyle />
      <BrowserRouter>
        <AppRoutes/>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
    
  )
}

export default App
