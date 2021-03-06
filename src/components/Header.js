import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component {

handleChange(e){
    const title = e.target.value;
    this.props.changeTitle(title);

}

  render() {
        return (          
            <div> {this.props.title}
            <input value={this.props.title} onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
};
