import React from 'react';

export const LogoIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="#1a1a1a"/>
        <path d="M3.5 10.5H6.5L8.5 14.5L11.5 5.5L13.5 10.5H16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const BarChartIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12H5V21H3V12Z" fill="currentColor"/>
        <path d="M11 4H9V21H11V4Z" fill="currentColor"/>
        <path d="M19 8H17V21H19V8Z" fill="currentColor"/>
    </svg>
);

export const PersonIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const BoxIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.25 4.08333L7 7L1.75 4.08333M7 12.8333L1.75 9.91667V4.08333L7 7L12.25 4.08333V9.91667L7 12.8333Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.75 4.08333L7 1.16667L12.25 4.08333" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const ArrowUpIcon = () => (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 1L4 7" stroke="#116508" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M1.5 3.5L4 1L6.5 3.5" stroke="#116508" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

export const ArrowDownIcon = () => (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 7L4 1" stroke="#FF0202" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6.5 4.5L4 7L1.5 4.5" stroke="#FF0202" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);
