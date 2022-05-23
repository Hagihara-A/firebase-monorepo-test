# Monorepo firebase project sample
## 目的
1. firebaseプロジェクトをモノレポで管理できることを示す
2. モノレポが使いやすいことを知ってもらう
3. モノレポの可能性について紹介する

## 使用ツール
1. yarn v2: モノレポ依存解決とインストール簡単化のため
2. esbuild: functionのビルド
これだけ。

今回はビルド手順が複雑ではないので省いたが、`turborepo`を用いることでビルドを高速かつ不足なく行うことができる。

## 構成
```
root
  |- apps
    |- hosting: Next.jsで作られたwebページ
    |- functions: firebase-functionsにデプロイするnodeアプリケーション

  |- libs
    |- common: hostingとfunctionsで共有するコード
    |- model: hostingとfunctionsで共有する型定義など

```

## 特徴
### 社内パッケージをオンラインレジストリにアップロードする必要がない
複数プロジェクトで共有している社内パッケージをレジストリにプライベート設定でアップロードするのは手間である。モノレポであればリポジトリで完結するのでアップロードする必要がない。

加えて、パッケージ利用時にはリポジトリのコードを参照しに行くので、依存パッケージに変更があった場合にレジストリのバージョンアップを待たなくてよい。

### アプリケーション間で共有するコードをパッケージとして管理できる
このリポジトリで言えば、hostingとfunctionsで型定義などのコードを共有できる。たとえばこのリポジトリにもう一つNextjsアプリケーションが増えて、両アプリがOAuth認可を必要とするとする。この場合、共有する処理をパッケージに切り出すことでコードの共有ができる。

__まとめると、複数アプリケーションでコードの再利用ができて管理の手間が少ないので、開発者体験があがる。__