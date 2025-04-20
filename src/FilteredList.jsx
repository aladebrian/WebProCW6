import React, { Component } from 'react';
import { Dropdown, DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      search: "",
      type: "All"
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  //TODO (FilteredList): Set the state of the "type" state variable depending on what is passed in
  onFilter = (event) => {
    this.setState({type: event.target.innerHTML});
  }

  //TODO (FilteredList): Change filterItem to take into account the "type" state variable when filtering
  filterItem = (item) => {
      return item.name.toLowerCase().search(this.state.search) !== -1 && (this.state.type === "All" ? true : item.type === this.state.type);
  }

  render(){
    return (
        <div className = "filter-list">
         <h1>Produce Search</h1>
          {/*TODO (FilteredList): Create a Dropdown Menu with three different menu options: Fruit, Vegetables, and All*/}
          <DropdownButton id='dropdown-basic-button' title='types of produce'>
              <Dropdown.Item onClick={this.onFilter}>All</Dropdown.Item>
              <Dropdown.Item onClick={this.onFilter}>Fruit</Dropdown.Item>
              <Dropdown.Item onClick={this.onFilter}>Vegetable</Dropdown.Item>
          </DropdownButton>
          <input type = "text" placeholder = "Search" onChange = {this.onSearch} />
          <List items = {this.props.items.filter(this.filterItem)} />
        </div>
    );
  }
}

export default FilteredList;
