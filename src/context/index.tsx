'use client'

import { bitcoinAdapter, projectId, networks, stacks } from '@/config'
import { createAppKit } from '@reown/appkit/react'
import React, { type ReactNode } from 'react'

if (!projectId) {
  throw new Error('Project ID is not defined')
}

const metadata = {
  name: 'Web App on Stacks', 
  description: 'Reown AppKit integration with Stacks Network',
  url: 'https://web-app-on-stacks.vercel.app/', 
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

createAppKit({
  adapters: [bitcoinAdapter],
  projectId,
  networks,
  defaultNetwork: stacks, 
  metadata,
  features: {
    analytics: true
  }
})

function ContextProvider({ children }: { children: ReactNode }) {
  return <>{children}</>
}

export default ContextProvider