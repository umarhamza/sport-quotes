import React, {Component} from 'react';
import Form from './Form';
import List from './List';

class Main extends Component {
    state = {
        items: [],
    }

    componentDidMount() {
        const storedData = JSON.parse(localStorage.getItem('items'));

        storedData && this.setState({
            items: [...storedData],
        });
    }

    addQuote = (data) => {
        const initstate = this.state.items;
        const {content} = data;

        this.setState({
            items: [...initstate, content],
        }, () => {
            localStorage.setItem('items', JSON.stringify(this.state.items));
        });
    }

    render() {
        return (
            <div className="Main">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-6 column-1">
                            <Form addQuote={this.addQuote} />
                        </div>

                        <div className="col col-md-6 column-2">
                            <List items={this.state.items} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;