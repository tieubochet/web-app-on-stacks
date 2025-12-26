import { BitcoinAdapter } from '@reown/appkit-adapter-bitcoin'
import { bitcoin } from '@reown/appkit/networks'
import type { AppKitNetwork } from '@reown/appkit/networks'

// 1. Định nghĩa mạng Stacks
export const stacks: AppKitNetwork = {
  id: 'stacks:1', // CAIP-2 ID
  chainId: '1',
  caipNetworkId: 'stacks:1',
  name: 'Stacks',
  currency: 'STX',
  explorerUrl: 'https://explorer.hiro.so',
  rpcUrl: 'https://stacks-node-api.mainnet.stacks.co',
  chainNamespace: 'stacks',
  nativeCurrency: {
    name: 'Stacks',
    symbol: 'STX',
    decimals: 6,
  },
}

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
if (!projectId) {
  throw new Error('Project ID is not defined')
}

// 2. Xuất networks (Để Stacks lên đầu tiên để ưu tiên)
export const networks = [stacks, bitcoin]

export const bitcoinAdapter = new BitcoinAdapter({
  projectId,
  networks
})