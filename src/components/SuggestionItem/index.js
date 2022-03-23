import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, updateSuggestionOnClick} = props
  const {suggestion} = eachSuggestion

  const updateSuggestion = () => {
    updateSuggestionOnClick(suggestion)
  }

  return (
    <li className="list-container">
      <p className="description">{suggestion}</p>

      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="image-icon"
        alt="arrow"
        onClick={updateSuggestion}
      />
    </li>
  )
}
export default SuggestionItem
