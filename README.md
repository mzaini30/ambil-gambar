# Ambil Gambar

Untuk mengambil gambar dari teks Markdown

## Instalasi

```bash
npm i mzaini30/ambil-gambar
```

## Contoh Penggunaan

```javascript
const ambilGambar = require('ambil-gambar')
const teks = `
![Bersandar di pohon](https://i.ibb.co/yYWd5t0/undraw-Waiting-for-you-ldha.png)

Aku membuat blog bukan berarti aku suka nulis. Aku membuat blog karena aku suka membuat website
`
console.log(ambilGambar(teks))
```

Hasil:

```
https://i.ibb.co/yYWd5t0/undraw-Waiting-for-you-ldha.png
```