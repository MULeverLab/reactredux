import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getRequest} from "../actions/index";


class SearchBar extends Component {
    constructor (props){
        super (props);

        this.state ={term: ''};
        this.onInputChange=this.onInputChange.bind(this);
        this.onFormSubmit=this.onFormSubmit.bind(this);

    }

    onFormSubmit (event){
        event.preventDefault();
        console.log('message in search');
        this.props.getRequest;
        this.setState({term:''});
    }

    onInputChange (event){
        this.setState({term: event.target.value});
        console.log(this.state.term);
    }

    render (){
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    placeholder="API Request"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span>
                    <button type="submit">Submit</button>
                </span>

            </form>


        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getRequest}, dispatch);
}



export default connect (null, mapDispatchToProps)(SearchBar);