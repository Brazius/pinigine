import React, { Component } from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import AddCurrency from './AddCurrency';

class Currencies extends Component {
    constructor(props) {
        super(props);
        this.state = { currencies: [] };
    }

    componentDidMount() {
        fetch('http://localhost:8080/currencies', { headers: { "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5NTMzMDkzNn0.3TwAdUoeglA6PjliXEbRtV_pSWo91U5b_jCJE48XT-3VIFLt2eutoiHrrRWdR-Yt77fxb6cv5mPQJe_ydc5qmw" } })
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
            ,];
        return (
            <div className="App">
                <AddCurrency addCurrency={this.addCurrency} fetchCurrencies={this.fetchCurrencies} />
                <ReactTable data={this.state.currencies} columns={columns} filterable={true} />
            </div>
        );
    }
}

export default Currencies;  