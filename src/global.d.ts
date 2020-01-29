type Owner = {
  img: string
  name: string
  title: string
}

declare module '*.png'

declare const module: { hot: { accept: () => void } }
