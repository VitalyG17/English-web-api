import {Controller, Delete, Get, Post, Req, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common';
import {ProfileService} from './profile.service';
import {JwtAuthGuard} from '../auth/guards/jwt-auth.guard';
import {FileInterceptor} from '@nestjs/platform-express';
import {diskStorage} from 'multer';
import {extname, join} from 'path';
import {v4 as uuidv4} from 'uuid';
import * as fs from 'fs';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @UseGuards(JwtAuthGuard)
  @Get('getProfile')
  async getProfile(@Req() req: Express.Request) {
    const user = req.user as {id: number};
    return this.profileService.getProfile(user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete')
  async deleteProfile(@Req() req: Express.Request) {
    const user = req.user as {id: number};
    return await this.profileService.deleteProfile(user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('upload-avatar')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (req, file, cb) => {
          const uploadPath = join(process.cwd(), 'uploads');

          if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, {recursive: true});
          }
          cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
          const ext = extname(file.originalname);
          const filename = `${uuidv4()}${ext}`;
          cb(null, filename);
        },
      }),
      limits: {fileSize: 5 * 1024 * 1024}, // 5MB
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.startsWith('image/')) {
          return cb(new Error('Неверный тип файла'), false);
        }
        cb(null, true);
      },
    }),
  )
  async uploadAvatar(@UploadedFile() file: Express.Multer.File, @Req() req: Express.Request) {
    const user = req.user as {id: number};
    return this.profileService.updateAvatar(user.id, file.filename);
  }
}
