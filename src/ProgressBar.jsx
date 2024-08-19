import React from 'react'

const ProgressBar = ({ progress }) => {
    return (
        <div style={{ width: '100%', height: '30px', background: '#e0e0e0' }}>
            <div
                style={{
                    width: `${progress}%`,
                    height: '100%',
                    background: '#76c7c0',
                    transition: 'width 0.3s ease-in-out'
                }}
            />
        </div>
    )

        
}

export default ProgressBar
