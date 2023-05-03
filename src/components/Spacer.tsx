import React from "react"

type SpacerProps = {
    /** スペース */
    size: number
}

/** スペースを開ける */
const Spacer: React.FC<SpacerProps> = ({ size }) => {
    return (
        <div style={{ height: size, width: size }} />
    )
}

export default Spacer