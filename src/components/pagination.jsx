import React from 'react'
import { Flex, Box, Separator } from '@radix-ui/themes'

export function Pagination() {
  return (
    <Flex gap="4" align="center">
      <Box className="flex items-center gap-2">
        <aside className="relative bg-zinc-500 rounded-full p-1 h-7 w-7">
          <p className="mx-auto left-0 right-0 text-center font-bold text-white absolute">
            1
          </p>
        </aside>
        <aside>Cadastro</aside>
      </Box>
      <Separator color="indigo" size="3" orientation="horizontal" />
      <Box className="flex items-center gap-2">
        <aside className="relative bg-zinc-500 rounded-full p-1 h-7 w-7">
          <p className="mx-auto left-0 right-0 text-center font-bold text-white absolute">
            2
          </p>
        </aside>
        <aside>Responsavéis</aside>
      </Box>
      <Separator color="indigo" size="3" orientation="horizontal" />
      <Box className="flex items-center gap-2">
        <aside className="relative bg-zinc-500 rounded-full p-1 h-7 w-7">
          <p className="mx-auto left-0 right-0 text-center font-bold text-white absolute">
            3
          </p>
        </aside>
        <aside>Turmas</aside>
      </Box>
      <Separator color="indigo" size="3" orientation="horizontal" />
      <Box className="flex items-center gap-2">
        <aside className="relative bg-zinc-500 rounded-full p-1 h-7 w-7">
          <p className="mx-auto left-0 right-0 text-center font-bold text-white absolute">
            4
          </p>
        </aside>
        <aside>Financeiro</aside>
      </Box>
      <Separator color="indigo" size="3" orientation="horizontal" />
      <Box className="flex items-center gap-2">
        <aside className="relative bg-zinc-500 rounded-full p-1 h-7 w-7">
          <p className="mx-auto left-0 right-0 text-center font-bold text-white absolute">
            5
          </p>
        </aside>
        <aside>Questionários</aside>
      </Box>
      <Separator color="indigo" size="3" orientation="horizontal" />
      <Box className="flex items-center gap-2">
        <aside className="relative bg-zinc-500 rounded-full p-1 h-7 w-7">
          <p className="mx-auto left-0 right-0 text-center font-bold text-white absolute">
            6
          </p>
        </aside>
        <aside>Documentos</aside>
      </Box>
    </Flex>
  )
}
