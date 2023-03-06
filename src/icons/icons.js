import React from "react";

export const Checkmark = () => {
    return(
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={2.5} 
        stroke="#2cffbb" 
        className="w-6 h-6"
        style={{
            width: '30px',
            height: 'auto',
        }}
        >
            <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M4.5 12.75l6 6 9-13.5" 
            />
        </svg>
    );
};

export const CheckmarkCircle = () => {
    return(
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 18 18" 
        fill="#2cffbb" 
        className="w-5 h-5">
        <path 
        fillRule="evenodd" 
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" 
        clipRule="evenodd" />
        </svg>
    );
}

export const QuestionMark = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="#22303C" 
        className="w-6 h-6">
        <path 
        fillRule="evenodd" 
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" 
        />
      </svg>      
    );
}

export const ChevronUp = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-6 h-6">
        <path strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
    );
}

export const ChevronDown = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="rgb(243, 244, 246)" 
        className="w-6 h-6">
        <path strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export const Camera = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
        </svg>
    );
};

export const Question = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 20 20" 
        fill="#2cffbb" 
        className="w-4 h-4">
        <path 
        fillRule="evenodd" 
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" 
        />
        </svg>
    );
};