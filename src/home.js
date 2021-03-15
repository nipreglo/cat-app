import React from 'react';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            catbreeds: [],
        };
    }

    componentDidMount() {
        var fetch_options = {
            headers: {
                'method': 'GET',
                'x-api-key' : '131ee1db-7501-443d-8984-e5f4fdd8b6d5'
            }
        };

        fetch('https://api.thecatapi.com/v1/breeds', fetch_options)
        .then(response => {
            response.json().then(data => {
                this.setState({catbreeds: data});
            });
        });
    }

    render() {
        return (
            <div>
                <div className="header">Cat Browser</div>
                <p>Breed</p>
                <select placeholder="Select breed">
                    {this.state.catbreeds.map(breed=>(
                        <option value={breed.id}>{breed.name}</option>
                    ))}
                </select>
            </div>
        );
    }
}

export default Home;
