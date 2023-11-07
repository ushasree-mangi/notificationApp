const Notification = props => {
  //  Write your code here.
  const {name,icon,className}=props
  return (
      <div className={`notification-container ${className}`>
          <ul className="styling">
              <li><img className="icon-img" src={icon}/></li>
              <li className="notification-text">{name}</li>
          </ul>
      </div>
  )

}

const element = (
  //  Write your code here. 
  <div className="bg-container">
   <div className="content-container">
       <h1 className="heading">Notifications</h1>
       <Notification className="info-container" name="Information message" icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" />
         <Notification className="success-container" name="Success message" icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" />
           <Notification className="warning-container" name="Warning message" icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" />
        <Notification className="error-container" name="Error message" icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
  
   </div>
  </div>  
)

ReactDOM.render(element, document.getElementById('root'))
