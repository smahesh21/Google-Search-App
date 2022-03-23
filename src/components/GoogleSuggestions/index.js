import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  changingSearchText = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSuggestionOnClick = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    console.log(searchInput)
    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-icon"
          alt="google logo"
        />
        <div className="sub-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="image-icon"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search-text"
              value={searchInput}
              onChange={this.changingSearchText}
            />
          </div>
          <ul className="ul-list-container">
            {searchResults.map(eachSuggestion => (
              <SuggestionItem
                eachSuggestion={eachSuggestion}
                key={eachSuggestion.id}
                updateSuggestionOnClick={this.updateSuggestionOnClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
