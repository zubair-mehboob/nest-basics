import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
export type Song = {
id:string,
title?:string,
singer?:string,

}

//const songs = [{id:1, title:"song 1", singer:"Atif"},{id:2, title:"song 2", singer:"Sonu"},{id:3, title:"song 3", singer:"Arjit"}]
@Injectable()
export class SongsService {

    private readonly songs: Song[] = []
    getSongs() : Song[]{
        return this.songs;
    }
    getSong(id:string) : Song{
        return this.songs.find(song => song.id === id);
    }
    updateSong(id:string, song: Song) : Song{
        const findSong = this.songs.find(song => song.id === id);
        findSong.title = song?.title || findSong.title;
        findSong.singer = song?.singer || findSong.singer;
        
        return findSong
    }
    deleteSong(id:string) : Song{
        const index = this.songs.findIndex(song => song.id === id);
        const song = this.songs[index]
        this.songs.splice(index,1)
        return song
    }
    create(song){
        
        return song
    }

}
