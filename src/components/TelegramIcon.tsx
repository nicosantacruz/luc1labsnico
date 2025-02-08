import React from 'react';

export const TelegramIcon = ({ className = '', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M21.633 3.373c-.17-.182-.442-.275-.815-.275-.242 0-.505.033-.784.096l-17.78 6.918c-.392.14-.647.284-.766.43-.119.147-.158.284-.119.412.04.128.179.235.418.323.238.088.555.163.95.227l4.43.551c.127.042.245.034.354-.024l8.55-5.364c.123-.075.225-.113.307-.113.063 0 .112.017.147.051.035.034.052.075.052.123 0 .057-.032.117-.095.18l-6.731 6.081c-.096.089-.134.19-.113.304l.815 4.226c.117.608.307.912.57.912.34 0 .742-.252 1.207-.757l2.914-2.912 4.402 3.347c.4.304.755.456 1.064.456.466 0 .762-.304.89-.912l3.234-15.21c.086-.405.048-.705-.121-.887z" />
  </svg>
);