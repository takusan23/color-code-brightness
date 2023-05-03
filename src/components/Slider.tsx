import React from "react"

type SliderProps = {
    /** ID */
    id: string,
    /** ラベル */
    label: string,
    /** 値 */
    value: number,
    /** 値が変化したら呼ばれる */
    onChange: (value: number) => void,
    /** 最小値 */
    min?: number,
    /** 最大値 */
    max?: number
}

/** スライダー */
const Slider: React.FC<SliderProps> = ({ id, label, value, onChange, min, max }) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={id}>{`${label} ( ${value} % )`}</label>
            <input
                className="rounded-md border-2 bg-inherit border-slate-500"
                type="range"
                name={id}
                min={min ?? 0}
                max={max ?? 100}
                value={value}
                onChange={e => onChange(Number(e.target.value) ?? 0)}
            />
        </div>
    )
}


export default Slider