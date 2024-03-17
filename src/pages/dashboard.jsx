import React from 'react'
import { Container, Box } from '@radix-ui/themes'
import { Pagination } from '../components/pagination'

export function DashBoard() {
  return (
    <Container size="5" className="px-12 py-4">
      <Box className="bg-slate-400 rounded-lg">
        <section className="p-4">
          <Pagination />
        </section>
        <section>...</section>
      </Box>
    </Container>
  )
}
