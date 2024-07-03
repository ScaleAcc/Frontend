import ReactDOM from 'react-dom/client'
// Redux
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css"
//Routes
import AppRouter from '@routes/AppRouter';
//Providers
ReactDOM.createRoot(document.getElementById('root')!).render(
        <AppRouter />
);
