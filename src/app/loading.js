import React from 'react';

const LoadingSkeleton = () => {
    return (
        <div className="animate-pulse space-y-4 p-4">
            <div className="h-6 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
        </div>
    );
}

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <LoadingSkeleton />
        </div>
    );
};

export default Loading;