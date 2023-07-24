# impulse99-radio-js
This is a node.js module for the Impulse99 Radio API.

### Features
- Get Station
- Get Listeners
- Get Currently Playing
- Get Next Playing
- Get Song History
- Get Radio Status 

### Installation
```bash
npm install impulse99-radio-js
```

### Usage
```js
const ImpulseRadio = new (require("impulse99-radio-js"))();

// GET STATION
const station = await ImpulseRadio.getStation();
console.log(station);

// GET LISTENERS
const listeners = await ImpulseRadio.getListeners();
console.log(listeners);

// GET CURRENTLY PLAYING
const NowPlaying = await ImpulseRadio.getNowPlaying();
console.log(NowPlaying);

// GET NEXT PLAYING
const NextPlaying = await ImpulseRadio.getNextPlaying();
console.log(NextPlaying)

// GET HISTORY
const SongHistory = await ImpulseRadio.getSongHistory();
console.log(SongHistory);

// GET RADIO STATUS
const RadioStatus = await ImpulseRadio.getRadioStatus();
console.log(RadioStatus);
```

### Example Outputs
##### ImpulseRadio.getStation();
```js
{
    success: true,
    name: 'Impulse99 Radio',
    listen_url: 'https://radio.impulse99.com/listen/impulse99_radio/radio.mp3',
    public_player_url: 'https://radio.impulse99.com/public/impulse99_radio',
    playlist_pls_url: 'https://radio.impulse99.com/public/impulse99_radio/playlist.pls',
    playlist_m3u_url: 'https://radio.impulse99.com/public/impulse99_radio/playlist.m3u'
}
```

##### ImpulseRadio.getListeners();
```js
{ 
    success: true, 
    total: 64, 
    unique: 64, 
    current: 64
}
```

##### ImpulseRadio.getNowPlaying();
```js
{
    success: true,
    duration: '5 Minutes - 53 Seconds',
    duration_seconds: 353,
    song: 'Tears',
    artist: 'Watami',
    album: '',
    art: 'https://impulse99.com/fivem/99_square.png',
    status: { elapsed: 293, remaining: 60 }
}
```

##### ImpulseRadio.getNextPlaying();
```js
{
    success: true,
    duration: '6 Minutes - 2 Seconds',
    duration_seconds: 362,
    song: "Don't Stop Movin' (Darts Remix)",
    artist: 'S Club 7',
    album: 'Mooch Records',
    art: 'https://radio.impulse99.com/api/station/1/art/23d39535d9467f35a02df90b-1606156354.jpg'
}
```

##### ImpulseRadio.getSongHistory();
```js
[
    {
        success: true,
        duration: '5 Minutes - 53 Seconds',
        duration_seconds: 353,
        song: 'Tears',
        artist: 'Watami',
        album: '',
        art: 'https://impulse99.com/fivem/99_square.png'
    },
    {
        success: true,
        duration: '4 Minutes - 31 Seconds',
        duration_seconds: 271,
        song: 'All I Know',
        artist: 'Madp',
        album: '',
        art: 'https://impulse99.com/fivem/99_square.png'
    },
    {
        success: true,
        duration: '4 Minutes - 50 Seconds',
        duration_seconds: 290,
        song: 'Avalon (VIP)',
        artist: 'Maduk',
        album: 'Escapism',
        art: 'https://radio.impulse99.com/api/station/1/art/1a4f66a462e6ab26be0a89f1-1658331965.jpg'
    },
    {
        success: true,
        duration: '5 Minutes - 21 Seconds',
        duration_seconds: 321,
        song: 'Revolution (Cascada Vs. Tune Up! Remix)',
        artist: 'DJ Klubbingman',
        album: 'The Essential Cascada Remixed Singles CD1',
        art: 'https://radio.impulse99.com/api/station/1/art/5c8ddb45cc13ef1a430cdc9c-1606160663.jpg'
    },
    {
        success: true,
        duration: '5 Minutes - 26 Seconds',
        duration_seconds: 326,
        song: 'LA LA LI LA LA (THE SONG OF RISING SUN)',
        artist: 'MACHO GANG',
        album: 'SUPER EUROBEAT presents 頭文字[イニシャル]D Dream Collection Vol.3 DISC2:EXTENDED VERSION',
        art: 'https://radio.impulse99.com/api/station/1/art/e0b3a78716ff91b1f8caea45-1606162947.jpg'
    }
]
```

##### ImpulseRadio.getRadioStatus();
```js
{ 
    success: true, 
    online: true, 
    cache: null 
}
```


**Disclaimer:** This is not made by Impulse99 so this is not official!