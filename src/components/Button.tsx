import React from "react"

type ButtonProps = {
    /** テキスト */
    text: string,
    /** 押したときの動作、文字列なら href、関数ならコールバック */
    action: string | (() => void)
}

/** ボタン */
const Button: React.FC<ButtonProps> = ({ text, action }) => {

    const buttonComponent = (
        <input
            className="p-2 border-2 border-stone-500 rounded-md cursor-pointer"
            type="button"
            value={text}
        />
    )

    return <>
        {
            typeof action === 'string' ? <>
                <a href={action}>
                    {buttonComponent}
                </a>
            </> : <>
                <div onClick={action}>
                    {buttonComponent}
                </div>
            </>
        }
    </>
}

export default Button