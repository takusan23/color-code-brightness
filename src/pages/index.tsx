import { Inter } from 'next/font/google'
import Title from '@/components/Title'
import TextField from '@/components/TextField'
import Spacer from '@/components/Spacer'
import React from 'react'
import Slider from '@/components/Slider'
import useColorBrightness from '@/hooks/useColorBrightness'
import ColorPreview from '@/components/ColorPreview'
import Button from '@/components/Button'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  const { colorCode, setColorCode, brightness, setBrightness, calcColorCode } = useColorBrightness()

  return (
    <main className={`flex flex-col min-h-screen justify-center ${inter.className}`}>

      <div className='flex flex-col grow items-center justify-center'>
        <Title title='カラーコードの明るさを調整するアプリ' />
        <Spacer size={20} />

        <div className='flex flex-col space-y-5'>
          <TextField id='color_code' label='カラーコード' value={colorCode} onChange={setColorCode} />
          <Slider id='brightness' label='明るさ' value={brightness} onChange={setBrightness} />
        </div>

        <Spacer size={20} />

        <div className='flex flex-col space-y-5 items-center'>
          {
            calcColorCode ? <>
              <Title title='計算結果' />
              <ColorPreview size={100} colorCode={calcColorCode} />
              <Title title={calcColorCode} />
              <Button text='コピーする' action={() => { navigator.clipboard.writeText(calcColorCode) }} />
            </> : <>
              <Title title={calcColorCode ?? '変換に失敗しました'} />
            </>
          }
        </div>
      </div>

      <div className='flex flex-col items-center py-1'>
        <Button text='GitHub' action='https://github.com/takusan23/color-code-brightness' />
      </div>
    </main>
  )
}

export default Home