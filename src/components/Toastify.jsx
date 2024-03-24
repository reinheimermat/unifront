import { toast } from 'react-toastify'

export const Toastify = ({ type, message }) => {
  // Função para exibir o toast com base no tipo e mensagem recebidos como props
  const showToast = () => {
    switch (type) {
      case 'success':
        toast.success(message)
        break
      case 'error':
        toast.error(message)
        break
      case 'info':
        toast.info(message)
        break
      default:
        toast(message)
    }
  }

  showToast()
}
