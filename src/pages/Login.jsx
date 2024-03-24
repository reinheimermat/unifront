import React, { useState } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'
import Switch from '../components/Switch'
import { useAdminContext } from '../contexts/isAdmContext'
import { notify } from '../utils/notify'

export const Login = () => {
  const fullConfig = resolveConfig(tailwindConfig)
  const { isAdmin, toggleAdmin } = useAdminContext()
  const [isInputEmailFocused, setIsInputEmailFocused] = useState(false)
  const [isInputPasswordFocused, setIsInputPasswordFocused] = useState(false)
  const [isLoginButtonHovered, setIsLoginButtonHovered] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const initialUsers = [
    {
      name: 'Juvenal',
      email: 'admin@example.com',
      password: 'admin123',
      isAdmin: true,
    },
    {
      name: 'Juvêncio',
      email: 'student1@example.com',
      password: 'student123',
      isAdmin: false,
    },
    {
      name: 'Juvelina',
      email: 'student2@example.com',
      password: 'student456',
      isAdmin: false,
    },
  ]

  const users = JSON.parse(localStorage.getItem('users')) || initialUsers

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    // Lógica de autenticação
    const user = users.find(
      (user) =>
        user.email === email &&
        user.password === password &&
        user.isAdmin === isAdmin,
    )

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user))
      notify('success', 'Login bem-sucedido!')
      // Redirecionar para a página principal ou fazer outras ações após o login
    } else {
      notify('error', 'Usuário ou senha inválidos.')
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex justify-center items-center h-screen bg-custom-black-200">
      <div className="flex justify-center items-center flex-col bg-custom-black-300 w-full sm:w-[450px] h-screen sm:h-auto px-9 py-10 rounded-md">
        <div className="text text-3xl font-semibold text-custom-gray-200 mb-8 text-center -tracking-tighter">
          Login
        </div>

        <form className="w-full" onSubmit={handleFormSubmit}>
          <div className="mb-4 flex flex-row-reverse items-center justify-center text-custom-blue-100">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Digite seu email"
              required
              className="border border-custom-black-700 rounded-r w-full h-14 px-3 bg-gradient-to-t to-custom-black-600 from-custom-black-400 placeholder-custom-gray-100 outline-none focus:bg-gradient-to-t focus:to-custom-black-600 focus:from-custom-black-400 focus:animate-glow-input"
              onFocus={() => setIsInputEmailFocused(true)}
              onBlur={() => setIsInputEmailFocused(false)}
              value={email}
              onChange={handleEmailChange}
            />
            <label
              className={`cursor-pointer border border-custom-black-700 rounded-l bg-gradient-to-t to-custom-black-600 from-custom-black-400 w-20 h-14 flex items-center justify-center ${isInputEmailFocused && 'animate-glow-icon'}`}
              htmlFor="email"
            >
              <i
                className={`fas fa-envelope fa-solid fa-lg ${isInputEmailFocused ? 'text-custom-blue-100' : 'text-custom-gray-100'}`}
              ></i>
            </label>
          </div>

          <div className="mb-4 flex flex-row-reverse items-center justify-center text-custom-blue-100">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Digite a sua senha"
              required
              className="border border-custom-black-700 rounded-r w-full h-14 px-3 bg-gradient-to-t to-custom-black-600 from-custom-black-400 placeholder-custom-gray-100 outline-none focus:bg-gradient-to-t focus:to-custom-black-600 focus:from-custom-black-400 focus:animate-glow-input"
              onFocus={() => setIsInputPasswordFocused(true)}
              onBlur={() => setIsInputPasswordFocused(false)}
              value={password}
              onChange={handlePasswordChange}
            />
            <label
              className={`cursor-pointer border  border-custom-black-700 rounded-l bg-gradient-to-t to-custom-black-600 from-custom-black-400 w-20 h-14 flex items-center justify-center ${isInputPasswordFocused && 'animate-glow-icon'}`}
              htmlFor="password"
            >
              <i
                className={`fas fa-lock fa-solid fa-lg ${isInputPasswordFocused ? 'text-custom-blue-100' : 'text-custom-gray-100'}`}
              ></i>
            </label>
          </div>

          <button
            className=" border border-custom-black-700 rounded bg-gradient-to-t to-custom-black-600 from-custom-black-400 w-20 h-14 flex items-center justify-center text-custom-gray-100 mt-8 w-full font-bold text-lg -tracking-tighter"
            onMouseEnter={() => setIsLoginButtonHovered(true)}
            onMouseLeave={() => setIsLoginButtonHovered(false)}
            style={{
              borderColor:
                isLoginButtonHovered &&
                fullConfig.theme.colors['custom-blue-100'],
              boxShadow:
                isLoginButtonHovered &&
                `0 0 5px ${fullConfig.theme.colors['custom-blue-500']}, 0 0 10px ${fullConfig.theme.colors['custom-blue-400']}, 0 0 15px ${fullConfig.theme.colors['custom-blue-300']}, 0 2px 0 ${fullConfig.theme.colors['custom-black-100']}`,
              color:
                isLoginButtonHovered &&
                fullConfig.theme.colors['custom-blue-100'],
              textShadow:
                isLoginButtonHovered &&
                `2px 2px 3px ${fullConfig.theme.colors['custom-blue-500']}`,
            }}
          >
            ENTRAR
          </button>

          <Switch option1="Aluno" option2="Admin" contextToggle={toggleAdmin} />

          <div className="flex flex-col justify-center sm:flex-row mt-4 text-custom-gray-200 text-center">
            Esqueceu a senha?&nbsp;
            <a href="#" className="text-custom-blue-100 hover:underline">
              Recuperar agora
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
