import React from 'react'
import { GraduationCap, CircleHelp } from 'lucide-react'
import { Avatar, Flex, Container, Box } from '@radix-ui/themes'
import matheus from '../assets/Logo.png'

export function SubHeader() {
  return (
    <Container size="5" className="px-12 py-4">
      <Flex gap="4" align="center" justify="between">
        <Box className="flex items-center gap-4 uppercase text-lg text-slate-200 font-bold">
          <GraduationCap size="2rem" />
          <h2>Universidade Unifront - Sistema de matriculas</h2>
        </Box>
        <Box className="flex items-center gap-4">
          <CircleHelp className="text-slate-300" />
          <Avatar src={matheus} radius="full" />
        </Box>
      </Flex>
    </Container>
  )
}
