import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeCapId: countryAndCapitalsList[0].id}

  onSelectCapital = event => {
    this.setState({activeCapId: event.target.value})
  }

  render() {
    const {activeCapId} = this.state
    console.log(activeCapId)
    const findCountry = countryAndCapitalsList.find(
      each => each.id === activeCapId,
    )
    console.log(findCountry)
    return (
      <div className="bg">
        <div className="content-div">
          <h1 className="head">Countries and Capitals</h1>
          <select
            className="select"
            id="capitals"
            name="country-capitals"
            onChange={this.onSelectCapital}
            value={activeCapId}
          >
            {countryAndCapitalsList.map(each => (
              <option key={each.id} value={each.id} className="options">
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="capitals"> is capital of which country</label>
          <h2>{findCountry.country}</h2>
        </div>
      </div>
    )
  }
}

export default Capitals
