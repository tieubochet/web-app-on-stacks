'use client'

import { useAppKit, useAppKitAccount, useDisconnect } from "@reown/appkit/react";
import { useEffect, useState } from "react";

export default function Home() {
  const { address, isConnected } = useAppKitAccount();
  const { disconnect } = useDisconnect(); // Hook ngắt kết nối
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <div className="min-h-screen bg-gray-900"></div>;

  // Kiểm tra xem có phải địa chỉ Stacks không (Bắt đầu bằng SP hoặc SM)
  const isStacks = address?.startsWith('SP') || address?.startsWith('SM');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-900 text-white font-sans">
      <div className="z-10 w-full max-w-lg items-center justify-between text-sm flex flex-col gap-10">
        
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600 text-center">
          Talent Challenge
        </h1>
        
        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 w-full flex flex-col items-center gap-8">
          
          {/* Nút Connect chính */}
          <div className="scale-110">
             <appkit-button />
          </div>

          <div className="w-full border-t border-gray-700 pt-6">
             {isConnected && address && (
               <div className="flex flex-col gap-4">
                 
                 {/* TRƯỜNG HỢP 1: Đã ra địa chỉ Stacks (ĐÚNG) */}
                 {isStacks ? (
                   <div>
                     <span className="text-green-400 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                       ✅ Connected to Stacks
                     </span>
                     <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-500/50 font-mono text-sm sm:text-lg break-all text-purple-300 mt-2">
                       {address}
                     </div>
                   </div>
                 ) : (
                   /* TRƯỜNG HỢP 2: Ra địa chỉ Bitcoin (SAI) */
                   <div className="bg-red-900/20 border border-red-600/50 p-4 rounded-lg text-center">
                     <p className="text-red-400 font-bold mb-2">⚠️ Đang kết nối nhầm mạng Bitcoin</p>
                     <p className="text-gray-400 text-xs mb-3">
                       Bạn đang kết nối: {address.slice(0, 6)}...<br/>
                       Vui lòng ngắt kết nối và thử lại.
                     </p>
                     
                     {/* Thay vì Switch (bị lỗi), ta dùng Disconnect */}
                     <button 
                        onClick={() => disconnect()}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-all w-full"
                     >
                        Ngắt kết nối & Thử lại
                     </button>
                   </div>
                 )}
               </div>
             )}
          </div>
        </div>
      </div>
    </main>
  );
}