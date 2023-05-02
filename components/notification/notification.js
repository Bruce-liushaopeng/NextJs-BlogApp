import ReactDOM from 'react-dom';
import classes from './notification.module.css';

function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  console.log(typeof window)
  if (typeof window !== 'undefined') {
    console.log("window is defined")
    return ReactDOM.createPortal(
      <div className={cssClasses}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>,
      document.getElementById('notification')
    );
  } else {
    return null; // return null on server-side
  }
}

export default Notification;
