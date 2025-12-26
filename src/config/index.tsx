import { BitcoinAdapter } from '@reown/appkit-adapter-bitcoin'
import { type AppKitNetwork } from '@reown/appkit/networks'

// Định nghĩa mạng Stacks Mainnet chuẩn
export const stacks: AppKitNetwork = {
  id: 'stacks:1', // ID chuẩn CAIP cho Stacks
  chainId: '1',
  caipNetworkId: 'stacks:1',
  name: 'Stacks',
  currency: 'STX',
  explorerUrl: 'https://explorer.hiro.so',
  rpcUrl: 'https://stacks-node-api.mainnet.stacks.co',
  chainNamespace: 'stacks', // Quan trọng: báo cho Adapter biết đây là Stacks
  nativeCurrency: {
    name: 'Stacks',
    symbol: 'STX',
    decimals: 6,
  },
}

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || 'b56e18d47c72ab683b6a6c0f8980e579'

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Chỉ để Stacks vào đây để AppKit không bị nhầm sang Bitcoin
export const networks = [stacks]

export const bitcoinAdapter = new BitcoinAdapter({
  projectId,
  networks
})