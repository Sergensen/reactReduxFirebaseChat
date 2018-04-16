import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';

export default class Menu extends Component {
  constructor(props){
    super(props);
    this.state={
      username: ""
    }
  }

  onChange(e){
    this.setState({username: e.target.value});
  }
  signOut(e){
    this.props.signOut();
  }
  changeName(e) {
    /*modal for type a new Name and update it*/
  }

  changePic(e){
    /*modal for selecting & uploading a profile pic*/
  }

  render() {
    return (
      <Grid>
        <Grid.Column>
          <Button type="button" style={{width:"100%"}} color="red" onClick={this.signOut.bind(this)}>Logout</Button>
          <Button type="button" style={{width:"100%"}} color="blue" onClick={this.changeName.bind(this)}>Change username</Button>
          <Button type="button" style={{width:"100%"}} color="blue" onClick={this.changePic.bind(this)}>Change picture</Button>
        </Grid.Column>
      </Grid>
    );
  }
}
