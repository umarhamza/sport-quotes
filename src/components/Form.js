import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';

class Form extends Component {
    state = {
        show: false,
        content: {
            quote: '',
            author: '',
        },
        validation: {
            status: '',
            message: '',
        }
    }

    hangleToggleForm = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            show: !prevState.show
        }));
    }

    handleChange = (e) => {
        const {id, value} = e.target;
        const initstate = this.state.content;

        this.setState({
            content: {...initstate, [id]: value}
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { quote, author } = this.state.content;
        const hasContent = !(quote === '' || author === '');
        const validation = hasContent ? { status: 'success', message: 'Success! Your quote has been added.' } : { status: 'error', message: 'Please fill in the all fields.' };

        if(hasContent) (this.props.addQuote(this.state));
        
        this.setState({
            validation
        }, () => {
            if (this.state.validation.status === 'success') {
                setTimeout(() => this.setState({ validation: { status: '' } }), 2000);
                this.setState({ content: { quote: '', author: '' } });
            }
        });

    }

    render() {
        const formMessage = this.state.validation.status !== '' ? (<div className={`form-validation ${this.state.validation.status}`}>{this.state.validation.message}</div>) : '';

        return (
            <div className="Form">
                <button onClick={this.hangleToggleForm} id="js-toggle-form" className="toggle-form">{this.state.show ? 'Hide Form' : 'Add New Quote'}</button>
                <form onSubmit={this.handleSubmit} style={{ display: `${this.state.show ? 'block' : 'none'}`}} id="add-quote-form" className="quote-form">
                    <h2 className="quote-form--title">Add a new quote</h2>
                    <label htmlFor="quote" className="quote-form--label">Quote</label>
                    <TextareaAutosize 
                        onChange={this.handleChange} 
                        value={this.state.content.quote}
                        type="text" id="quote" 
                        className="quote-form--input" 
                        style={{resize: 'none'}}
                        maxRows={10}
                        placeholder="Type in or paste quote."
                        // required
                    />
                    <label htmlFor="author" className="quote-form--label">Person</label>
                    <input 
                        onChange={this.handleChange} 
                        value={this.state.content.author}
                        type="text" 
                        id="author" 
                        className="quote-form--input" 
                        placeholder="Type in author name." 
                        // required
                    />
                    <button id="submit-form" className="quote-form--button">Submit</button>
                    { formMessage }
                </form>
            </div>
        )
    }
}

export default Form;