// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onUpdateTab, isActive} = props

  const {tabId, displayText} = tabDetails
  const activeTab = isActive ? 'active-tab-btn' : ''

  const onClickTab = () => {
    onUpdateTab(tabId)
  }

  return (
    <li className="tab-list">
      <button
        type="button"
        onClick={onClickTab}
        className={`${activeTab} tab-btn`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
