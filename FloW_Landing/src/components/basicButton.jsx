

export default function BasicButton({
    borderCol,
    backgroundCol,
    text,
    textColor,
    width
}) {

    return (
        <button
            style={{
                padding: "8px 30px",
                fontSize: "8px",
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