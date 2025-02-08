import React from 'react';

export const FarcasterIcon = ({ className = '', ...props }) => (
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
    <path d="M6.2 3.75h11.6v16.5h-1.7v-7.57h-.017a4.15 4.15 0 0 0-8.166 0H7.9v7.57H6.2V3.75z" />
    <path d="M3.1 6.1l.692 2.34h.585v9.5a.53.53 0 0 0-.53.53v.64h-.106a.53.53 0 0 0-.53.53v.64h5.97v-.64a.53.53 0 0 0-.53-.53h-.107v-.64a.53.53 0 0 0-.53-.53h-.64V6.1H3.1z" />
    <path d="M16.2 18a.53.53 0 0 0-.53.53v.64h-.107a.53.53 0 0 0-.53.53v.64h5.97v-.64a.53.53 0 0 0-.53-.53h-.106v-.64a.53.53 0 0 0-.53-.53V8.44h.585L21 6.1h-4.27v11.9h-.53z" />
  </svg>
);