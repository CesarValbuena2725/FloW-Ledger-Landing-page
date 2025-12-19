

export default function BasicButton({
    borderCol = '#153163',
    backgroundCol = '#3069CB',
    text,
    textColor = '#FFFFFF',
    onClick,
    ariaLabel = ''
}) {

    return (
        <button
            className="basic-button"
            aria-label={ariaLabel}
            title={ariaLabel}
            onClick={onClick}
            style={{
                backgroundColor: backgroundCol,
                border: `1px solid ${borderCol}`,
                color: textColor,
                borderRadius: "9999px",
                fontWeight: "bold",
                lineHeight: '1'
            }}>
            {text}
        </button>
    )
} 