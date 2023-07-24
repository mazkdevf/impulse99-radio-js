const fetch = require('node-fetch');

class ImpulseRadio {
    constructor(options = {}) {
        this.options = options;
        this.url = 'https://radio.impulse99.com/api/nowplaying/1';
    }

    getStation = () => new Promise(async (resolve, reject) => {
        try {
            const base = await this.getBaseData();
            const station = base.station;
            resolve({
                success: true,
                name: station.name,
                listen_url: station.listen_url,
                public_player_url: station.public_player_url,
                playlist_pls_url: station.playlist_pls_url,
                playlist_m3u_url: station.playlist_m3u_url,
            });
        } catch (error) {
            reject(error);
        }
    });

    getListeners = () => new Promise(async (resolve, reject) => {
        try {
            const base = await this.getBaseData();
            const listeners = base.listeners;
            resolve({
                success: true,
                total: listeners.total,
                unique: listeners.unique,
                current: listeners.current
            });
        } catch (error) {
            reject(error);
        }
    });

    getNowPlaying = () => new Promise(async (resolve, reject) => {
        try {
            const base = await this.getBaseData();
           
            const nowPlaying = base.now_playing;
            const minutes = Math.floor(nowPlaying.duration / 60);
            const seconds = nowPlaying.duration - minutes * 60;

            resolve({
                success: true,
                duration: `${minutes} Minutes - ${seconds} Seconds`,
                duration_seconds: nowPlaying.duration,
                song: nowPlaying.song.title,
                artist: nowPlaying.song.artist,
                album: nowPlaying.song.album,
                art: nowPlaying.song.art,
                status: {
                    elapsed: nowPlaying.elapsed,
                    remaining: nowPlaying.remaining
                }
            })
        } catch (error) {
            reject(error);
        }
    });

    getNextPlaying = () => new Promise(async (resolve, reject) => {
        try {
            const base = await this.getBaseData();
            const nextPlaying = base.playing_next;
            const minutes = Math.floor(nextPlaying.duration / 60);
            const seconds = nextPlaying.duration - minutes * 60;

            resolve({
                success: true,
                duration: `${minutes} Minutes - ${seconds} Seconds`,
                duration_seconds: nextPlaying.duration,
                song: nextPlaying.song.title,
                artist: nextPlaying.song.artist,
                album: nextPlaying.song.album,
                art: nextPlaying.song.art,
            })
        } catch (error) {
            reject(error);
        }
    });

    getSongHistory = () => new Promise(async (resolve, reject) => {
        try {
            const base = await this.getBaseData();
            const songHistory = base.song_history;
            const history = [];
            for (const song of songHistory) {
                const minutes = Math.floor(song.duration / 60);
                const seconds = song.duration - minutes * 60;
                history.push({
                    success: true,
                    duration: `${minutes} Minutes - ${seconds} Seconds`,
                    duration_seconds: song.duration,
                    song: song.song.title,
                    artist: song.song.artist,
                    album: song.song.album,
                    art: song.song.art,
                });
            }
            resolve(history);
        } catch (error) {
            reject(error);
        }
    });

    getRadioStatus = () => new Promise(async (resolve, reject) => {
        try {
            const base = await this.getBaseData();

            if (base.is_online) {
                resolve({
                    success: true,
                    online: true,
                    cache: base.cache
                });
            } else {
                resolve({
                    success: true,
                    online: false,
                    cache: base.cache
                });
            }
        } catch (error) {
            reject(error);
        }
    });

    getBaseData = () => new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(this.url);
            const data = await response.json();
            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = ImpulseRadio;