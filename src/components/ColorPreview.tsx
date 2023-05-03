type ColorPreviewProps = {
    /** カラーコード */
    colorCode: string,
    /** サイズ */
    size: number
}

const ColorPreview: React.FC<ColorPreviewProps> = ({ colorCode, size }) => {
    return <div
        className="rounded-lg"
        style={{
            height: size,
            width: size,
            backgroundColor: colorCode
        }}
    />
}

export default ColorPreview