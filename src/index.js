import React, { Component } from 'react';
import { render } from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import { Menu as WMenu, InputDate } from '@grapecity/wijmo.react.input';
import '@grapecity/wijmo.styles/themes/wijmo.theme.material.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {

    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>

          <h1>
            Wijmo Controls
          </h1>
          <label>
            Select a date:
            <InputDate className="ripple"
              isAnimated={true}/>
          </label>
          <WMenu className="ripple"
            header="Click me"
            isAnimated={true}
            showDropDownButton={false}
            itemsSource={'Refresh,Help & feedback,Settings,Sign out'.split(',')}
            itemClicked={() => {
              alert('you clicked it!')
            }}/>

          <h1>
            Material UI Controls
          </h1>
          <RaisedButton
            onClick={this.handleTouchTap}
            label="Click me"
          />
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
          >
            <Menu>
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Help &amp; feedback" />
              <MenuItem primaryText="Settings" />
              <MenuItem primaryText="Sign out" />
            </Menu>
          </Popover>
        </div>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
