import { BitcoinAdapter } from '@reown/appkit-adapter-bitcoin'
// Import cả 2 mạng
import { bitcoin, type AppKitNetwork } from '@reown/appkit/networks'

// Định nghĩa mạng Stacks Mainnet
export const stacks: AppKitNetwork = {
  id: 'stacks:1',
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
if (!projectId) throw new Error('Project ID is not defined')

// MẢNG NETWORKS: Đặt stacks ĐỨNG TRƯỚC bitcoin
export const networks = [stacks, bitcoin]

export const bitcoinAdapter = new BitcoinAdapter({
  projectId,
  networks
})