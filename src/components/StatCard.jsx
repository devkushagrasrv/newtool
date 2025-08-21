import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from './icons';

const StatCard = ({ label, value, change, changeType }) => {
    const isIncrease = changeType === 'increase';
    const changeColor = isIncrease ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400';
    const changeIcon = isIncrease ? <ArrowUpIcon /> : <ArrowDownIcon />;

    return (
        <div className="bg-[#2d2d2d] p-3 rounded-lg border border-dark-border flex-1 min-w-[120px]">
            <p className="text-xs uppercase text-dark-text-secondary font-semibold">{label}</p>
            <p className="text-lg font-bold text-dark-text-primary mt-1">{value}</p>
            <div className="flex items-center space-x-1 mt-1">
                <div className={`text-xs px-1.5 py-0.5 rounded-full flex items-center space-x-1 ${changeColor}`}>
                    {changeIcon}
                    <span>{change}</span>
                </div>
            </div>
        </div>
    );
};

export default StatCard;
