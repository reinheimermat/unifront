# Documentação do Sistema de Matrículas

## Introdução

Este projeto é uma avaliação da Faculdade e tem como objetivo criar um sistema de matrículas para uma instituição de ensino superior EAD. A aplicação permite cadastrar e gerenciar alunos em turmas online.

## Especificações Técnicas

- **Front End**: Utilizamos o framework React JS com Radix UI e Lucide Icons para a interface do usuário.

- **API**: Utilizamos a API criada na disciplina.

- **Banco de Dados**: Utilizamos Postgres.

- **Idioma de escrita do código**: Inglês.

- **Identação e formatação do código**: ESLint.

## Contextualização

Imagine que a Instituição de Ensino Superior precisa de uma solução para cadastrar e gerenciar matrículas de usuários em turmas online. Para realizar a matrícula, é necessário que o cadastro do aluno tenha sido realizado. O desafio consiste em criar uma aplicação para o cadastro de usuários conforme os critérios de aceitação.

## Mockups de Interface

Aqui estão alguns mockups de interface como guia para a criação do front-end. Fique à vontade para usar sua criatividade e melhorias na criação do design.

### Listagem de Alunos

!Listagem de Alunos

### Criar/Editar Aluno

!Criar/Editar Aluno

## Histórias do Usuário

### Cadastrar Novo Aluno

- Dado que estou na tela de Consulta de Alunos

- Quando clico em "Cadastrar Aluno"

- Então abre a tela de Cadastro do Aluno e exibe os campos obrigatórios vazios

- Dado que inseri dados válidos nos campos

- Quando clico em "Salvar"

- Então cria o novo aluno na base e retorna mensagem de sucesso

- Dado que inseri dados válidos nos campos

- Quando clico em "Cancelar"

- Então retorna para a tela de Consulta de Alunos e não persiste a gravação dos dados no banco

### Listar Alunos Cadastrados

- Dado que estou no Módulo Acadêmico

- Quando clico no menu "Alunos"

- Então abre a tela de Consulta de Alunos

- Exibe a opção "Cadastrar Aluno" ao topo

- Lista dados dos alunos cadastrados

- Exibe opção "Editar" por aluno

- Exibe opção "Excluir" por aluno

## Equipe

- **Matheus Reinheimer**: Desenvolvedor Front-End

- **Jean Knieling**: Desenvolvedor Full-Stack

- **Mateus Moraes**: Responsável pelo design da interface

<!-- - **Nome do Gerente de Projeto**: Coordenação e planejamento -->

## Licença

[![license](https://img.shields.io/github/license/{reinheimermat}/{unifront}.svg)](https://mit-license.org/)

![vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
