// src/config/index.tsx
import { BitcoinAdapter } from '@reown/appkit-adapter-bitcoin'
// Đảm bảo KHÔNG import { bitcoin } từ thư viện networks
import type { AppKitNetwork } from '@reown/appkit/networks'

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

// CHỈ CÓ STACKS
export const networks = [stacks]

export const bitcoinAdapter = new BitcoinAdapter({
  projectId,
  networks
})