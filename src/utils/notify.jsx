import { toast } from 'react-toastify'

const CloseButton = ({ closeToast }) => (
  <i className="fa-solid fa-xmark" onClick={closeToast}></i>
)

export const notify = (type, message) => {
  const toastOptions = [
    message,
    {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      className: 'bg-gradient-to-t to-custom-black-600 from-custom-black-400',
      closeButton: CloseButton,
    },
  ]

  switch (type) {
    case 'success':
      toast.success(...toastOptions)
      break
    case 'error':
      toast.error(...toastOptions)
      break
    case 'info':
      toast.info(...toastOptions)
      break
    default:
  }
}
