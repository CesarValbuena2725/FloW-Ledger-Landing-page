import { useState } from 'react'

export default function BasicButton({
    borderCol = '#153163',
    backgroundCol = '#3069CB',
    text,
    textColor = '#FFFFFF',
    onClick,
    ariaLabel = ''
}) {
    const [hovered, setHovered] = useState(false)

    const baseStyle = {
        backgroundColor: backgroundCol,
        border: `1px solid ${borderCol}`,
        color: textColor,
        borderRadius: "9999px",
        fontWeight: "bold",
        lineHeight: '1',
        cursor: 'pointer',
        transition: 'box-shadow 0.18s ease, transform 0.12s ease',
        willChange: 'transform, box-shadow'
    }

    const hoverStyle = hovered
        ? { boxShadow: '0 6px 14px rgba(21,48,99,0.12)', transform: 'translateY(-2px)' }
        : {}

    const style = { ...baseStyle, ...hoverStyle }

    return (
        <button
            className="basic-button"
            aria-label={ariaLabel}
            title={ariaLabel}
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={style}
        >
            {text}
        </button>
    )
}