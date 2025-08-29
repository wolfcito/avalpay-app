import Link from "next/link";

interface OperationHistory {
  operation: string;
  success: boolean;
  timestamp: string;
}

export default function Home() {
  const isConnected = true;
  const operationHistory: OperationHistory[] = [];

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Header Navigation */}
      <header className="border-b border-gray-800 bg-[#1A1A1A]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-red-500 rounded-sm"></div>
                <span className="font-bold text-xl">AVALTOOLKIT</span>
              </div>
              <nav className="hidden md:flex items-center space-x-6">
                <span className="px-4 py-2 bg-red-500 rounded-full text-sm font-medium">Dashboard</span>
                <span className="px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm">Swap</span>
                <span className="px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm">Liquidity</span>
                <span className="px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm">Vote</span>
                <span className="px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm">Analytics</span>
              </nav>
            </div>
            
            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              <button className="px-6 py-2 bg-red-500 hover:bg-red-600 transition-colors rounded-lg font-medium text-sm">
                Connect Wallet
              </button>
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <span className="text-lg">🌙</span>
                </button>
                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <span className="text-lg">⚙️</span>
                </button>
                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <span className="text-lg">☰</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dashboard Overview
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Welcome to AVALTOOLKIT - Your control center for private operations on Avalanche
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-[#2C2C2C] rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl">🔗</div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm font-medium mb-2">Connection Status</h3>
              <p className={`text-2xl font-bold ${isConnected ? 'text-green-400' : 'text-red-400'}`}>
                {isConnected ? 'Connected' : 'Disconnected'}
              </p>
            </div>
          </div>
          
          <div className="bg-[#2C2C2C] rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl">📊</div>
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm font-medium mb-2">Operations Completed</h3>
              <p className="text-2xl font-bold text-white">{operationHistory.length}</p>
            </div>
          </div>
          
          <div className="bg-[#2C2C2C] rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl">🛠️</div>
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm font-medium mb-2">Available Tools</h3>
              <p className="text-2xl font-bold text-white">2 Systems</p>
            </div>
          </div>
          
          <div className="bg-[#2C2C2C] rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl">⚡</div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm font-medium mb-2">Performance</h3>
              <p className="text-2xl font-bold text-white">Optimized</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Quick Actions</h2>
            <div className="text-sm text-gray-400">Create a new operation or access existing tools</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/converter" 
              className="group bg-[#2C2C2C] hover:bg-[#3C3C3C] rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all duration-200"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">🔄</div>
              <span className="text-white font-medium text-lg block mb-2">Go to Converter</span>
              <span className="text-gray-400 text-sm">Token conversion tools</span>
            </Link>
            
            <Link 
              href="/native" 
              className="group bg-[#2C2C2C] hover:bg-[#3C3C3C] rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all duration-200"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">⚡</div>
              <span className="text-white font-medium text-lg block mb-2">Go to Standalone</span>
              <span className="text-gray-400 text-sm">Native operations</span>
            </Link>
            
            <Link 
              href="/contract-builder" 
              className="group bg-[#2C2C2C] hover:bg-[#3C3C3C] rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all duration-200"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">🏗️</div>
              <span className="text-white font-medium text-lg block mb-2">Contract Builder</span>
              <span className="text-gray-400 text-sm">Smart contract tools</span>
            </Link>
            
            <Link 
              href="/cache-manager" 
              className="group bg-[#2C2C2C] hover:bg-[#3C3C3C] rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all duration-200"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">🧹</div>
              <span className="text-white font-medium text-lg block mb-2">Clear Cache</span>
              <span className="text-gray-400 text-sm">System maintenance</span>
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        {operationHistory.length > 0 && (
          <div className="bg-[#2C2C2C] rounded-lg p-8 border border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Recent Activity</h2>
              <div className="text-sm text-gray-400">Last 5 operations</div>
            </div>
            <div className="space-y-3">
              {operationHistory.slice(0, 5).map((op, index) => (
                <div 
                  key={index} 
                  className={`flex items-center p-4 rounded-lg border ${
                    op.success 
                      ? 'bg-green-500/10 border-green-500/20' 
                      : 'bg-red-500/10 border-red-500/20'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                    op.success ? 'bg-green-500/20' : 'bg-red-500/20'
                  }`}>
                    <span className={`text-sm font-bold ${
                      op.success ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {op.success ? '✓' : '✗'}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium">{op.operation}</div>
                    <div className="text-gray-400 text-sm">{op.timestamp}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-[#1A1A1A] mt-16">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
              <span className="text-gray-400 text-sm">Copyright 2025 AVALTOOLKIT. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Audited by Wolfcito</span>
              <div className="flex items-center space-x-3">
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">🌐</span>
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">🐦</span>
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">💬</span>
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">📱</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
