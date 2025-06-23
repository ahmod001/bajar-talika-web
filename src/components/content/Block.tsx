import React, { PropsWithChildren } from 'react'

const Block = ({ children, align }: PropsWithChildren<{ align?: 'left' | 'center' | 'right' }>) => {
    return (
        <p className={`text-gray-700 mb-4 `} style={{ textAlign: align }}>
            {children}
        </p>
    )
}

export default Block