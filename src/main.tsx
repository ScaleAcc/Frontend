import ReactDOM from "react-dom/client";
// Redux
// Styles
import "@styles/global.css";
import "./index.css";
//Routes
import AppRouter from "@routes/AppRouter";
//Providers
ReactDOM.createRoot(document.getElementById("root")!).render(<AppRouter />);
