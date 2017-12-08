import React from 'react';
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CDT from "./CustomDarkTheme"
import {HeaderBar} from "./Commons"
import SearchPage from "./search"
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
  render(){
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(CDT)}>
         <div className="PosFix" 
            style={{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflowY: 'scroll'}}>
            <div className="HeaderBar">
               <HeaderBar ava="man.ico"/>
            </div>
            <hr/>
            <div className="content_container">
               <SearchPage searchword="Ironman"/>
            </div>
         </div>
      </MuiThemeProvider>
      )
  }
}

ReactDOM.render(
	<App/>,
	 document.getElementById('search_root')
);

registerServiceWorker();
