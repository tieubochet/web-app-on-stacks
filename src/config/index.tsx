// src/config/index.tsx
import { BitcoinAdapter } from '@reown/appkit-adapter-bitcoin'
// TUYỆT ĐỐI KHÔNG import { bitcoin } từ networks
import type { AppKitNetwork } from '@reown/appkit/networks'

// Định nghĩa mạng Stacks
export const stacks: AppKitNetwork = {
  id: 'stacks:1',
  chainId: '1',
  caipNetworkId: 'stacks:1',
  name: 'Stacks',
  currency: 'STX',
  explorerUrl: 'https://explorer.hiro.so',
  rpcUrl: 'https://stacks-node-api.mainnet.stacks.co',
  chainNamespace: 'stacks',
  nativeCurrency: { name: 'Stacks', symbol: 'STX', decimals: 6 },
}

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || 'your-id'

// Danh sách networks chỉ được chứa [stacks]
export const networks = [stacks]

export const bitcoinAdapter = new BitcoinAdapter({
  projectId,
  networks
})