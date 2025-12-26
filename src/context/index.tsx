'use client'

import { bitcoinAdapter, projectId, networks, stacks } from '@/config'
import { createAppKit } from '@reown/appkit/react'
import React, { type ReactNode } from 'react'

if (!projectId) throw new Error('Project ID is not defined')

// MẸO QUAN TRỌNG: Đổi tên 'name' khác với tên cũ để Ví Leather không báo lỗi "Already linked"
const metadata = {
  name: 'Talent Stacks App V2', // <--- Đổi tên ở đây (Thêm V2, V3...)
  description: 'Stacks Integration',
  url: 'https://example.com', 
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

createAppKit({
  adapters: [bitcoinAdapter],
  projectId,
  networks,
  defaultNetwork: stacks, // Ép mặc định là Stacks
  metadata,
  features: { analytics: true }
})

function ContextProvider({ children }: { children: ReactNode }) {
  return <>{children}</>
}

export default ContextProvider