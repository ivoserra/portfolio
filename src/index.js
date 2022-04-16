import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";

import App from './App.jsx'
import DataContextProvider from "./components/Context/DataContext.jsx";


ReactDOM.render(
<HashRouter>
<DataContextProvider>
    <App/>
</DataContextProvider>
 

</HashRouter>, document.querySelector('#root'))