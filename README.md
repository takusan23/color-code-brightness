# color-code-brightness
カラーコードの明るさ調整器

![image](https://user-images.githubusercontent.com/32033405/235916671-f6bf6a47-f29a-4732-94ac-866dd4699ecd.png)

カラーコードからRGBを取り出し、同じだけ値をかけた後に再度16進数に変換する

## 環境構築

- Node.js を入れる（最新版で良いと思う）
- クローンする
- クローンしたフォルダでターミナルを開き、最初だけ `npm i` をする
- `npm run dev`する

## 本番ビルド

静的書き出しなら、`next build && next export`で`out`フォルダに成果物が出力されるので、  
これを`Netlify`なり`Cloudflare Pages`なんかで公開すればいいと思います。