import { Body, Controller , Delete, Get, Post, Put, Req} from '@nestjs/common';
import { Song, SongsService } from './songs.service';
import {Request} from 'express'
import { CreateSongDTO } from './dto/create-song-dto';
@Controller('songs')
export class SongsController {
    constructor(private readonly songservice:SongsService ){}
    @Get()
    getSongs() : Song[]{
        return this.songservice.getSongs()
    }
    @Get(":id")
    getSong(@Req() req: Request):Song{
        return this.songservice.getSong(req.params.id)
    }
    @Put(":id")
    updateSong(@Req() req: Request):Song{
        return this.songservice.updateSong(req.params.id, req.body)
    }
    @Delete(":id")
    deleteSong(@Req() req:Request):Song{
        return this.songservice.deleteSong(req.params.id)
    }
    @Post()
    create(@Body() createSongDTO: CreateSongDTO){
        return this.songservice.create(createSongDTO)

    }
}
