'use client'

import { useAppKit, useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react";
import { useEffect, useState } from "react";
// Import mạng stacks từ file config để dùng cho hàm switchNetwork
import { stacks } from "@/config"; 

export default function Home() {
  const { address, isConnected } = useAppKitAccount();
  const { caipNetwork, switchNetwork } = useAppKitNetwork(); // Hook để xử lý mạng
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hàm kiểm tra xem có đúng là địa chỉ Stacks không (Bắt đầu bằng SP hoặc SM)
  const isStacksAddress = address && (address.startsWith('SP') || address.startsWith('SM'));

  // Hàm xử lý chuyển mạng
  const handleSwitchToStacks = async () => {
    try {
      await switchNetwork(stacks);
    } catch (error) {
      console.error("Failed to switch network:", error);
    }
  };

  if (!mounted) return <div className="min-h-screen bg-gray-900"></div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-900 text-white font-sans">
      <div className="z-10 w-full max-w-lg items-center justify-between text-sm flex flex-col gap-10">
        
        <div className="text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
            Talent Challenge
          </h1>
          <p className="text-gray-400">Week 3: Stacks Integration</p>
        </div>
        
        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 w-full flex flex-col items-center gap-8">
          
          <div className="scale-110">
             <appkit-button />
          </div>

          <div className="w-full border-t border-gray-700 pt-6">
             <div className="flex justify-between items-center mb-4">
               <span className="text-gray-400">Status:</span>
               <span className={`font-bold ${isConnected ? "text-green-400" : "text-red-400"}`}>
                 {isConnected ? "Connected" : "Disconnected"}
               </span>
             </div>
             
             {/* Logic hiển thị địa chỉ */}
             {isConnected && address && (
               <div className="flex flex-col gap-4">
                 
                 {/* Trường hợp 1: Đã đúng địa chỉ Stacks */}
                 {isStacksAddress ? (
                   <div>
                     <span className="text-gray-400 text-xs uppercase tracking-wider">Your Stacks Address:</span>
                     <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-500/50 font-mono text-lg break-all text-purple-300 mt-2 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                       {address}
                     </div>
                   </div>
                 ) : (
                   /* Trường hợp 2: Đang hiện địa chỉ Bitcoin -> Hiện nút bắt đổi mạng */
                   <div className="bg-yellow-900/20 border border-yellow-600/50 p-4 rounded-lg text-center">
                     <p className="text-yellow-500 mb-2 font-semibold">⚠️ Wrong Network Detected</p>
                     <p className="text-gray-400 text-xs mb-3">
                       You are connected to Bitcoin ({address.slice(0, 6)}...). <br/>
                       Please switch to Stacks to see your STX address.
                     </p>
                     <button 
                        onClick={handleSwitchToStacks}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-all w-full"
                     >
                        Switch to Stacks Network
                     </button>
                   </div>
                 )}

                 {/* Debug Info (Có thể xóa sau) */}
                 <div className="mt-4 text-[10px] text-gray-600 font-mono">
                   Network: {caipNetwork?.name || 'Unknown'}
                 </div>
               </div>
             )}
          </div>
        </div>
      </div>
    </main>
  );
}