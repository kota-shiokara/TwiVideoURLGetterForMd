# TwiVideoURLGetterForMd
これは、Twitterに投稿された動画付きツイートから、マークダウン用サムネ有りリンクを抽出するGoogle Chrome酔うブックマークレットです。  

## 使い方
1. [compiled.js](./compiled.js)をコピペしてブックマークレットを作成してください。  
2. Twitterの動画付きツイートのページを開いた状態で、このブックマークレットをクリックします。
3. 「クリップボードにコピーしました。」の文字列がアラートされれば成功です。後はreadmeなどマークダウンファイルにぺっってしてください。　
  
※特に不具合は無いと思いますが、Twitterの動画付きツイート以外のページでブックマークレットを使用した場合の挙動はわかりません。  
  
使用例  
[![Video thumbneil](https://pbs.twimg.com/ext_tw_video_thumb/1378422960361332736/pu/img/2tsEgqL_W02GN019.jpg)](https://twitter.com/kotambourine/status/1378423807078137857/video/1)  
  
## 参考記事
- [Atria64/MarkdownUrlGenerator](https://github.com/Atria64/MarkdownUrlGenerator)
- [[JavaScript]クリップボードを使ったコピーとペースト](https://qiita.com/butakoma/items/642c0ec4b77f6bb5ebcf)
- [Twitterの動画をMarkdownに埋め込む方法](https://gist.github.com/5ebec/8adcac2f571c529ab1e29a5666801644)

## 使用ツール
 - [Closure Compiler](https://closure-compiler.appspot.com/home)