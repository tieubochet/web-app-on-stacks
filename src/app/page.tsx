'use client'

import { useAppKit, useAppKitAccount, useDisconnect } from "@reown/appkit/react";
import { useEffect, useState } from "react";

export default function Home() {
  const { address, isConnected } = useAppKitAccount();
  const { disconnect } = useDisconnect();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <div className="min-h-screen bg-gray-900"></div>;

  // Check if the address is a Stacks address (Starts with SP or SM)
  const isStacks = address?.startsWith('SP') || address?.startsWith('SM');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-900 text-white font-sans">
      <div className="z-10 w-full max-w-lg items-center justify-between text-sm flex flex-col gap-10">
        
        <div className="text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600 mb-2">
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
             
             {isConnected && address && (
               <div className="flex flex-col gap-4">
                 
                 {/* CASE 1: Correct Stacks Address */}
                 {isStacks ? (
                   <div>
                     <span className="text-green-400 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                       ✅ Connected to Stacks
                     </span>
                     <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-500/50 font-mono text-sm sm:text-lg break-all text-purple-300 mt-2 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                       {address}
                     </div>
                   </div>
                 ) : (
                   /* CASE 2: Wrong Network (Bitcoin) */
                   <div className="bg-red-900/20 border border-red-600/50 p-4 rounded-lg text-center">
                     <p className="text-red-400 font-bold mb-2">⚠️ Wrong Network Detected</p>
                     <p className="text-gray-400 text-xs mb-3">
                       You are connected to Bitcoin ({address.slice(0, 6)}...).<br/>
                       Please disconnect and try again.
                     </p>
                     
                     <button 
                        onClick={() => disconnect()}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-all w-full text-xs"
                     >
                        Disconnect & Retry
                     </button>
                   </div>
                 )}
               </div>
             )}
          </div>
        </div>
        
        <div className="text-center text-gray-600 text-xs">
          Powered by Reown AppKit & Leather Wallet
        </div>

      </div>
    </main>
  );
}