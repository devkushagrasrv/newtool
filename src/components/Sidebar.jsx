import React from 'react';
import { Key, Calendar, Search, Eye } from 'lucide-react';
import { LogoIcon } from './icons';

const Sidebar = () => {
    return (
        <aside className="w-full lg:w-[280px] bg-dark-card p-6 flex-shrink-0">
            <div className="flex items-center space-x-3 mb-8">
                <LogoIcon />
                <div>
                    <h1 className="text-2xl font-bold text-dark-text-primary">PULSE</h1>
                    <p className="text-xs text-dark-text-secondary">Scale Meta with Adbuff 💜</p>
                </div>
                <Eye className="w-5 h-5 text-dark-text-secondary ml-auto" />
            </div>

            <div className="bg-[#2d2d2d] p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-6">
                    <Key className="w-5 h-5 text-dark-text-secondary" />
                    <h2 className="text-lg font-medium text-dark-text-primary">Credential & Date</h2>
                </div>

                <div className="space-y-4">
                    <div>
                        <label htmlFor="token" className="text-sm font-light text-dark-text-secondary block mb-1">Meta Access Token</label>
                        <input type="password" id="token" defaultValue="************" className="w-full bg-dark-card border border-dark-border rounded-md p-2 text-sm" />
                    </div>
                    <div>
                        <label htmlFor="accountId" className="text-sm font-light text-dark-text-secondary block mb-1">Ad Account ID</label>
                        <input type="text" id="accountId" defaultValue="889455618398755" className="w-full bg-dark-card border border-dark-border rounded-md p-2 text-sm" />
                    </div>
                    <div>
                        <label htmlFor="dateRange" className="text-sm font-light text-dark-text-secondary block mb-1">Date Range</label>
                        <div className="relative">
                            <Calendar className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-text-secondary" />
                            <input type="text" id="dateRange" defaultValue="Aug 01, 2024 - Aug 31, 2024" className="w-full bg-dark-card border border-dark-border rounded-md p-2 pl-8 text-sm" />
                        </div>
                    </div>
                </div>

                <button className="w-full bg-dark-text-primary text-dark-bg font-semibold py-2.5 rounded-md mt-6 flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-colors">
                    <span>Fetch Performance Data</span>
                    <Search className="w-4 h-4" />
                </button>
            </div>

            <div className="mt-auto pt-8 text-center">
                <a href="#" className="text-sm text-dark-text-secondary hover:text-dark-text-primary">Privacy Policy</a>
            </div>
        </aside>
    );
};

export default Sidebar;
