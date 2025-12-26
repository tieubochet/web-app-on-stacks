'use client'

import { useAppKitAccount } from "@reown/appkit/react";
import { useEffect, useState } from "react";

export default function Home() {
  const { address, isConnected } = useAppKitAccount();
  const [mounted, setMounted] = useState(false);

  // Fix lỗi hydration mismatch (chỉ render sau khi client load xong)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-gray-900"></div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-900 text-white font-sans">
      <div className="z-10 w-full max-w-lg items-center justify-between text-sm flex flex-col gap-10">
        
        <div className="text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
            Talent Challenge
          </h1>
          <p className="text-gray-400">Week 3: Reown AppKit Integration</p>
        </div>
        
        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 w-full flex flex-col items-center gap-8">
          
          {/* Nút kết nối ví chính chủ từ Reown */}
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
             
             {isConnected && address && (
               <div className="flex flex-col gap-2">
                 <span className="text-gray-400 text-xs uppercase tracking-wider">Connected Address:</span>
                 <div className="bg-gray-950 p-3 rounded-lg border border-gray-600 font-mono text-xs sm:text-sm break-all text-blue-300">
                   {address}
                 </div>
               </div>
             )}
          </div>
        </div>
        
        <div className="text-center text-gray-600 text-xs">
          Built with Next.js & Reown AppKit
        </div>

      </div>
    </main>
  );
}