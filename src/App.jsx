import React from 'react';
import Sidebar from './components/Sidebar';
import AccountSummary from './components/AccountSummary';
import CustomBreakdowns from './components/CustomBreakdowns';
import PerformanceBreakdown from './components/PerformanceBreakdown';

function App() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-dark-bg font-sans">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <AccountSummary />
          <CustomBreakdowns />
          <PerformanceBreakdown />
        </div>
      </main>
    </div>
  );
}

export default App;
