import { useEffect, useState } from "react"

/** カラーコードに一致する正規表現。正規表現リテラル */
const COLOR_CODE_REGEX = /^#[0-9a-fA-F]{6}/

/**
 * カラーコードに明るさを適用するカスタムフック
 * 
 * @returns カラーコード、明るさの getter / setter 、計算結果 を返します。計算に失敗したら null を返します。
 */
const useColorBrightness = () => {
    const [colorCode, setColorCode] = useState('#000000')
    const [brightness, setBrightness] = useState(100)
    const [calcColorCode, setCalcColorCode] = useState<string | null>(colorCode)

    // カラーコードに明るさを適用する
    useEffect(() => {
        // 正規表現かどうか
        if (COLOR_CODE_REGEX.test(colorCode)) {
            // カラーコードの数値の部分のみ取り出し、Number 型に変換
            const hexString = colorCode.match(COLOR_CODE_REGEX)?.[0]?.replace('#', '')
            const dec = Number(`0x${hexString}`)
            // ビット演算を使い カラーコード から RGB にする
            const progress = (brightness / 100) ?? 1
            const red = (dec >> 16) // 16ビット 動かすだけ
            const green = (dec >> 8 & 0xFF) // 8ビット動かし 下から 2バイト 取り出す
            const blue = (dec & 0xFF) // 下から 2バイト 取り出すだけ
            // かける
            const calcRed = Math.floor(red * progress)
            const calcGreen = Math.floor(green * progress)
            const calcBlue = Math.floor(blue * progress)
            // カラーコードに戻す
            const hexRed = calcRed.toString(16).padStart(2, '0')
            const hexGreen = calcGreen.toString(16).padStart(2, '0')
            const hexBlue = calcBlue.toString(16).padStart(2, '0')
            // 繋げて返す
            setCalcColorCode(`#${hexRed}${hexGreen}${hexBlue}`)
        } else {
            // 失敗時
            setCalcColorCode(null)
        }
    }, [colorCode, brightness])

    return { colorCode, setColorCode, brightness, setBrightness, calcColorCode }
}

export default useColorBrightness