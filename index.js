const Notification = props => {
  const {className, iconUrl, message} = props
  const containerClassName = {`notification-container ${className}`}
    return (
    <div className={containerClassName}>
      <img className="icon" src={iconUrl} />
      <p className="message">{message}</p>
    </div>
  )
} 
const element = (
   <div className="bg-container">
    <h1 className="title">Notifications</h1>
    <div className="each-container">
      <Notification
        className="primary-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
      />
      <Notification
        className="success-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
      />
      <Notification
        className="warning-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
      />
      <Notification
        className="danger-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error Message"
      />
    </div>
  </div>
     
)

ReactDOM.render(element, document.getElementById('root'))
