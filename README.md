# Ambil Gambar

Untuk mengambil gambar pertama dari teks Markdown. Biasanya sih untuk thumbnail postingan blog.

## Instalasi

```bash
npm i @mzaini30/ambil-gambar
```

## Contoh Penggunaan

```javascript
const ambilGambar = require('@mzaini30/ambil-gambar')
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