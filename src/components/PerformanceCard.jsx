import React from 'react';
import { BoxIcon, ArrowUpIcon, ArrowDownIcon } from './icons';

const StatItem = ({ label, value, change, changeType }) => {
    const isIncrease = changeType === 'increase';
    const changeColor = isIncrease ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400';
    const changeIcon = isIncrease ? <ArrowUpIcon /> : <ArrowDownIcon />;

    return (
        <div className="text-center">
            <p className="text-xs uppercase text-dark-text-secondary">{label}</p>
            <p className="text-base font-semibold text-dark-text-primary mt-1">{value}</p>
            {change && (
                 <div className="flex items-center justify-center space-x-1 mt-1">
                    <div className={`text-[10px] px-1 py-0.5 rounded-full flex items-center space-x-1 ${changeColor}`}>
                        {changeIcon}
                        <span>{change}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

const PerformanceCard = ({ data }) => {
    return (
        <div className="bg-[#2d2d2d] p-4 rounded-lg border border-dark-border shadow-md flex flex-col">
            <div className="flex items-start space-x-2 mb-4">
                <BoxIcon className="w-5 h-5 text-dark-text-secondary mt-1" />
                <div>
                    <h3 className="font-bold text-dark-text-primary">{data.title}</h3>
                    <p className="text-xs text-dark-text-secondary">{data.description}</p>
                </div>
            </div>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-4">
                {data.stats.map(stat => <StatItem key={stat.label} {...stat} />)}
            </div>

            <hr className="border-dark-border my-4" />

            <div className="grid grid-cols-4 gap-2 text-center">
                {data.summary.map(item => (
                    <div key={item.label}>
                        <p className="text-[10px] uppercase text-dark-text-secondary font-medium">{item.label}</p>
                        <p className="text-xs font-semibold text-dark-text-primary mt-1">{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PerformanceCard;
