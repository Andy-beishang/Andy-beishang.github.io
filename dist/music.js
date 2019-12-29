const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "Rain",
        artist: 'End of the World',
        url: 'http://link.hhtjim.com/163/485775966.mp3',
        cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=32458329,1876113324&fm=26&gp=0.jpg',
      },
      {
        name: "Don't Be So Serious",
        artist: 'Low Roar',
        url: 'http://link.hhtjim.com/163/472045266.mp3',
        cover: 'http://p2.music.126.net/ITG_4dox75W6DsXVmM3lJg==/18996262393165753.jpg',
      }
    ]
});