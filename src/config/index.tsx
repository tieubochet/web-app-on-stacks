import { BitcoinAdapter } from '@reown/appkit-adapter-bitcoin'
// Import các kiểu dữ liệu cần thiết
import type { AppKitNetwork } from '@reown/appkit/networks'

// 1. Định nghĩa mạng Stacks thủ công (để đảm bảo không bị lỗi import)
export const stacks: AppKitNetwork = {
  id: 'stacks:1', // CAIP-2 ID cho Stacks Mainnet
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

// 2. Lấy Project ID
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
if (!projectId) {
  throw new Error('Project ID is not defined')
}

// 3. Thêm Stacks vào danh sách mạng
export const networks = [stacks]

// 4. Cấu hình Adapter (Vẫn dùng BitcoinAdapter để kết nối Leather)
export const bitcoinAdapter = new BitcoinAdapter({
  projectId,
  networks
})