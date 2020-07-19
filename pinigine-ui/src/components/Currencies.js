import React, {Component} from 'react';
import ReactTable from "react-table";

class Currencies extends Component {
    constructor(props) {
        super(props);
        this.state = {currencies: []};
    }

componentDidMount() {
    fetch('http://localhost:8080/currencies', {headers: {"Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5NTI2NTI0OX0.dyczMGv1OWyv00p_Te0E7n_WLWNYm6REINogeLVruVbfXRvWQRNcSq4lRDGEChjaY-pO3a0FXcuXacH7oOOaoQ"} })  
    .then((response) => response.json())  
    .then((responseData) => {  
        this.setState({  
            currencies: responseData  
        })  
    })  
    .catch(err => console.error(err))
}

    render() {
        const columns = [{
            Header: 'Currency',
            accessor: 'name',
            Cell: this.editable
        }, {
            Header: 'Code',
            accessor: 'code',
            Cell: this.editable
        }, {
            Header: 'Amount',
            accessor: 'amount'
        }, {
            Header: 'Rate',
            accessor: 'rate'
        }
            ];
        return (
            <div>
          <ReactTable data={this.state.currencies} columns={columns} filterable={true}/>
            </div>
        );
    }
}

export default Currencies;  