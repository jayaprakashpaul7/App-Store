// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-list">
      <img src={imageUrl} className="brand-logo" alt={appName} />
      <p className="brand-name">{appName}</p>
    </li>
  )
}

export default AppItem
