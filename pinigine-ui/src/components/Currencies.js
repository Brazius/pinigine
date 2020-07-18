import React, {Component} from 'react';

class Currencies extends Component {
    constructor(props) {
        super(props);
        this.state = {currencies: []};
    }

componentDidMount() {
    fetch('http://localhost:8080/currencies', {headers: {"Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5NTE2MTQ3OX0.jLhX73yA8XHJ8nX2eS2ZwNd_lZFpJAMXoVh_4yVPcQ7NEdTglnVIkBlH21cQVugwEJWMi7bM-rSLppW12Beh-A"} })  
    .then((response) => response.json())  
    .then((responseData) => {  
        this.setState({  
            currencies: responseData  
        })  
    })  
    .catch(err => console.error(err))
}

    render() {
        const tableRows = this.state.currencies.map((currency, index) =>
            <tr key={index}>
                <td>{currency.name}</td>
                <td>{currency.code}</td>
                <td>{currency.amount}</td>
                <td>{currency.rate}</td>
            </tr>
        );
        return (
            <div className="App">
                <table>
        <tbody>{tableRows}</tbody>
                </table>
            </div>
        );
    }
}

export default Currencies;  