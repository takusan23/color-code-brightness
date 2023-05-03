import React from "react"

type TextFieldProps = {
    /** ID */
    id: string,
    /** ラベル */
    label: string,
    /** 入力中の値 */
    value: string,
    /** テキスト変化時に呼ばれる */
    onChange: (value: string) => void
}

/** テキストボックス */
const TextField: React.FC<TextFieldProps> = ({ id, label, value, onChange }) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={id}>{label}</label>
            <input className="rounded-md border-2 bg-inherit border-slate-500 p-2" name={id} value={value} onChange={e => onChange(e.target.value)} />
        </div>
    )
}

export default TextField