import { BitcoinAdapter } from '@reown/appkit-adapter-bitcoin'
import { bitcoin, bitcoinTestnet } from '@reown/appkit/networks'

// 1. Lấy Project ID
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
if (!projectId) {
  throw new Error('Project ID is not defined')
}

// 2. Định nghĩa mạng Bitcoin
export const networks = [bitcoin, bitcoinTestnet]

// 3. Khởi tạo Bitcoin Adapter
export const bitcoinAdapter = new BitcoinAdapter({
  projectId,
  networks
})