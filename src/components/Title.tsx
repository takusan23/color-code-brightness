type TitleProps = {
    /** タイトル */
    title: string
}

/** タイトル */
const Title: React.FC<TitleProps> = ({ title }) => {
    return (
        <h1 className="text-2xl">{title}</h1>
    )
}

export default Title