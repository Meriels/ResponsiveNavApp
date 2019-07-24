import React from 'react';
import Toolbar from './Components/Toolbar/toolbar';
import SideDrawer from './Components/My-hamburger/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';

class App extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            sideDrawerOpen: false
        };
    }


    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

    render() {
        let backDrop;

        if (this.state.sideDrawerOpen) {
            backDrop = <Backdrop click={this.backdropClickHandler}/>;
        }
        return (
            <div style={{height: '100%'}}>
                <Toolbar handleDrawerClick={this.drawerToggleClickHandler}/>
                <SideDrawer action={this.state.sideDrawerOpen}/>
                {backDrop}
                <main style={{marginTop: '64px'}}/>
                <p>My Page Content</p>
            </div>
        )
    }
}

export default App;
