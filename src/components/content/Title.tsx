import React from 'react'

const Title = ({ children }: { children?: React.ReactNode }) => {
    return (
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">
            {children}
        </h3>
    )
}

export default Title