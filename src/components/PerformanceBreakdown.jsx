import React, { useState } from 'react';
import { PersonIcon } from './icons';
import { ChevronDown } from 'lucide-react';
import PerformanceCard from './PerformanceCard';
import { performanceData } from '../data/mockData';

const tabs = ['All Segment', 'Prospecting', 'Engaged', 'Existing'];

const PerformanceBreakdown = () => {
    const [activeTab, setActiveTab] = useState('All Segment');

    const TabButton = ({ label }) => {
        const isActive = activeTab === label;
        return (
            <button
                onClick={() => setActiveTab(label)}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors relative ${
                    isActive ? 'text-dark-text-primary' : 'text-dark-text-secondary hover:bg-dark-border/30'
                }`}
            >
                {label}
                {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
                )}
            </button>
        );
    };
    
    const displayedData = activeTab === 'All Segment' 
        ? Object.values(performanceData) 
        : [performanceData[activeTab]];

    return (
        <div className="bg-dark-card p-6 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-4">
                <div className="flex items-start space-x-3">
                    <PersonIcon className="w-7 h-7 text-dark-text-secondary" />
                    <div>
                        <h2 className="text-xl font-bold text-dark-text-primary">Performance Breakdown</h2>
                        <p className="text-sm text-dark-text-secondary">Breakdown of performance by user segment</p>
                    </div>
                </div>
                <button className="flex items-center justify-between w-full md:w-auto text-sm border border-dark-border rounded-md px-3 py-2 space-x-4">
                    <span>Audience Segment</span>
                    <ChevronDown className="w-4 h-4" />
                </button>
            </div>

            <hr className="border-dark-border mb-4" />

            <div className="bg-[#2d2d2d] p-1 rounded-lg flex flex-wrap items-center mb-6">
                {tabs.map(tab => <TabButton key={tab} label={tab} />)}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayedData.map(data => (
                    <PerformanceCard key={data.title} data={data} />
                ))}
            </div>
        </div>
    );
};

export default PerformanceBreakdown;
