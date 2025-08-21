import React from 'react';
import { Plus, Calculator } from 'lucide-react';
import { BoxIcon } from './icons';

const CustomBreakdowns = () => {
    return (
        <div className="bg-dark-card p-6 rounded-lg shadow-lg">
            <div className="flex items-start space-x-3 mb-4">
                <BoxIcon className="w-7 h-7 text-dark-text-secondary" />
                <div>
                    <h2 className="text-xl font-bold text-dark-text-primary">Custom Breakdowns</h2>
                    <p className="text-sm text-dark-text-secondary">Group performance data by your own rules.</p>
                </div>
            </div>
            <div className="space-y-3">
                <button className="w-full border border-dashed border-dark-border rounded-md py-2 flex items-center justify-center space-x-2 text-dark-text-secondary hover:bg-dark-border/20 transition-colors">
                    <Plus className="w-4 h-4" />
                    <span>Add Group</span>
                </button>
                <button className="w-full bg-dark-text-primary text-dark-bg font-semibold py-2.5 rounded-md flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-colors">
                    <Calculator className="w-4 h-4" />
                    <span>Calculate Breakdowns</span>
                </button>
            </div>
        </div>
    );
};

export default CustomBreakdowns;
