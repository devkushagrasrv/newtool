import React from 'react';
import StatCard from './StatCard';
import { BarChartIcon } from './icons';
import { summaryData } from '../data/mockData';

const AccountSummary = () => {
    return (
        <div className="bg-dark-card p-6 rounded-lg shadow-lg">
            <div className="flex items-start space-x-3 mb-4">
                <BarChartIcon className="w-6 h-6 text-dark-text-secondary mt-1" />
                <div>
                    <h2 className="text-xl font-bold text-dark-text-primary">Account Summary</h2>
                    <p className="text-sm text-dark-text-secondary">Top-line performance for the selected period</p>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {summaryData.map(item => <StatCard key={item.label} {...item} />)}
            </div>
        </div>
    );
};

export default AccountSummary;
