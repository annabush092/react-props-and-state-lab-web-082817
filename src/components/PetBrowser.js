import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  
  isPetAdopted(pet) {
    let found = this.props.adoptedPets.find(ap => {
      return (ap === pet.id)
    })
    if(found !== undefined){
      return true
    }else {
      return false
    }
  }

  render() {
    let allPets = this.props.pets.map(p => {
      return <Pet id={p.id} name={p.name} type={p.type} age={p.age} weight={p.weight} gender={p.gender} isAdopted={this.isPetAdopted(p)} onAdoptPet={this.props.onAdoptPet} />
    })
    return (
      <div className="ui cards">
        {allPets}
      </div>
    );
  }
}

export default PetBrowser;
