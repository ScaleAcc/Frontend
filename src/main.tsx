import ReactDOM from 'react-dom/client'
//pages
import Login from "@pages/Login"
// Redux
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css"
//Providers
ReactDOM.createRoot(document.getElementById('root')!).render(
        <Login />
);
