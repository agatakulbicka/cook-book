import React, {Component} from 'react';
// z braku laku istniających userów definiuję po prostu jako stałą
// w prawdziwej aplikacji pochodziliby z API i/lub byli w Reduksowym storze
const allUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania'];

class FilterList extends Component {
    constructor() {
        super();

        this.state = {
            filteredUsers: allUsers
        };
    }

    filterUsers(e) {
        const text = e.currentTarget.value;
        const filteredUsers = this.getFilteredUsersForText(text)
        this.setState({
            filteredUsers
        })
    }

    getFilteredUsersForText(text) {
        return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
    }

    render () {
        return (
            <div>
                <input onInput={this.filterUsers.bind(this)} />
                <UsersList users={this.state.filteredUsers} />
            </div>
        );
    }
}

export  default FilterList;

const UsersList = ({ users }) => {
    if (users.length > 0) {
        return (
            <ul>
                {users.map(user => <li key={user}>{user}</li>)}
            </ul>
        );
    }

    return (
        <p>No results!</p>
    );
};
