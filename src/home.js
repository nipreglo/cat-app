import React from 'react';
import './css/home.scss';

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
            <div className="App">
                <div className="Home">
                    <h1>Cat Browser</h1>
                    <div className="row" style={{padding: '10px 0px'}}>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="form-group">
                                <label className="form-label" for="breed">Breed</label>
                                <select id="breed" class="form-control">
                                    <option>Select breed</option>
                                    {this.state.catbreeds.map(breed=>(
                                        <option value={breed.id}>{breed.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
