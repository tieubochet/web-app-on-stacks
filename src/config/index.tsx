import { BitcoinAdapter } from '@reown/appkit-adapter-bitcoin'
import { bitcoin } from '@reown/appkit/networks' // Import mạng bitcoin có sẵn
import type { AppKitNetwork } from '@reown/appkit/networks'

// Định nghĩa Stacks thủ công
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
if (!projectId) {
  throw new Error('Project ID is not defined')
}

// FIX: Thêm 'bitcoin' vào đây để Adapter khởi tạo đúng kênh kết nối với Leather
export const networks = [stacks, bitcoin]

export const bitcoinAdapter = new BitcoinAdapter({
  projectId,
  networks
})