"use client"

export default function WalletConnectNav({ isConnected, connect, hasMetamask }: any) {

  return (
    <nav className="bg-black border-gray-200 px-4 py-2.5 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">Logo</div>
      <div className="space-x-4">
        <a href="#" className="hover:text-blue-500">Home</a>
        
        <button disabled={isConnected === true || hasMetamask === false} className="bg-blue-600 px-4 py-2 text-white rounded" onClick={()=> connect()}>
        { hasMetamask ? isConnected ? "Connected": "Connect" : "Install Metamask" }
        </button>
      </div>
    </nav>
  )
}
