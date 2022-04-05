import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from './App.jsx'
import DataContextProvider from "./components/DataContext.jsx";


ReactDOM.render(
<BrowserRouter>
<DataContextProvider>
    <App/>
</DataContextProvider>
 

</BrowserRouter>, document.querySelector('#root'))