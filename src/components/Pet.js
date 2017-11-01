import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);
    // props= {
    //   id: number
    //   name: ""
    //   type: "cat", "dog", "micropig"
    //   age: number
    //   weight: number
    //   gender: male/female
    //   isAdopted: true/false
    //   onAdoptPet: callback(petID)
    // }
  }

  handleAdoptClick(ev) {
    ev.preventDefault()
    this.props.onAdoptPet(this.props.id)
  }

  render() {
    let symbol = ""
    if(this.props.gender === "male") {
      symbol = "♂"
    }else if(this.props.gender === "female") {
      symbol = "♀"
    }

    let button = ""
    if(this.props.isAdopted) {
      button = <button className="ui disabled button">Already adopted</button>
    }else {
      button = <button className="ui primary button" onClick={this.handleAdoptClick.bind(this)}>Adopt pet</button>
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.name} {symbol}</a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {button}
        </div>
      </div>
    );
  }
}

export default Pet;
