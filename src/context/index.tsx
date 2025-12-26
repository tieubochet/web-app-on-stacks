'use client'

import { bitcoinAdapter, projectId, networks } from '@/config'
import { createAppKit } from '@reown/appkit/react'
import React, { type ReactNode } from 'react'

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Metadata
const metadata = {
  name: 'Talent Challenge Stacks',
  description: 'AppKit Bitcoin/Stacks Integration',
  url: 'https://example.com',
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

// Khởi tạo AppKit với Bitcoin Adapter
createAppKit({
  adapters: [bitcoinAdapter],
  projectId,
  networks,
  metadata,
  features: {
    analytics: true
  }
})

// Với Bitcoin Adapter, ta không cần bọc WagmiProvider hay QueryClientProvider
function ContextProvider({ children }: { children: ReactNode; cookies?: string | null }) {
  return (
    <>
      {children}
    </>
  )
}

export default ContextProvider