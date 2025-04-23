import {
  BadRequestException,
  Controller,
  Delete,
  Get,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {ProfileService} from './profile.service';
import {JwtAuthGuard} from '../auth/guards/jwt-auth.guard';
import {FileInterceptor} from '@nestjs/platform-express';
import {diskStorage} from 'multer';
import {extname} from 'path';
import {v4 as uuidv4} from 'uuid';
import * as fs from 'fs';
import {UPLOAD_CONFIG} from './config/file-upload.config';

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
          if (!fs.existsSync(UPLOAD_CONFIG.UPLOAD_PATH)) {
            fs.mkdirSync(UPLOAD_CONFIG.UPLOAD_PATH, {recursive: true});
          }
          cb(null, UPLOAD_CONFIG.UPLOAD_PATH);
        },
        filename: (req, file, cb) => {
          const ext = extname(file.originalname);
          const filename = `${uuidv4()}${ext}`;
          cb(null, filename);
        },
      }),
      limits: {fileSize: UPLOAD_CONFIG.MAX_FILE_SIZE},
      fileFilter: (req, file, cb) => {
        if (!UPLOAD_CONFIG.ALLOWED_MIME_TYPES.includes(file.mimetype)) {
          return cb(new BadRequestException('Неверный тип файла'), false);
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
