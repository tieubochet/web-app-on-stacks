'use client'

import { bitcoinAdapter, projectId, networks } from '@/config'
import { createAppKit } from '@reown/appkit/react'
import React, { type ReactNode } from 'react'

if (!projectId) {
  throw new Error('Project ID is not defined')
}

const metadata = {
  name: 'Talent Challenge Stacks',
  description: 'AppKit Stacks Integration',
  url: 'https://example.com', 
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

// Khởi tạo AppKit
createAppKit({
  adapters: [bitcoinAdapter],
  projectId,
  networks, // Danh sách này giờ chỉ chứa Stacks
  defaultNetwork: networks[0], // Mặc định chọn Stacks
  metadata,
  features: {
    analytics: true
  }
})

function ContextProvider({ children }: { children: ReactNode }) {
  return <>{children}</>
}

export default ContextProvider