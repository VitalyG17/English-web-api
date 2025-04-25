import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UploadedFile,
  UseInterceptors,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import {AchievementService} from './achievement.service';
import {FileInterceptor} from '@nestjs/platform-express';
import {achievementImageStorage} from './utils/multer.config';
import {CreateAchievementDto} from './dto/create-achievement.dto';
import {UpdateAchievementDto} from './dto/update-achievement.dto';

@Controller('achievement')
export class AchievementController {
  constructor(private readonly achievementService: AchievementService) {}

  @Get('getAll')
  getAll() {
    return this.achievementService.getAll();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.achievementService.getById(id);
  }

  @Get('user/:userId')
  getUserAchievements(@Param('userId', ParseIntPipe) userId: number) {
    return this.achievementService.getUserAchievements(userId);
  }

  @Post('create')
  @UseInterceptors(FileInterceptor('icon', {storage: achievementImageStorage}))
  create(@Body() dto: CreateAchievementDto, @UploadedFile() file?: Express.Multer.File) {
    return this.achievementService.create(dto, file?.filename);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('icon', {storage: achievementImageStorage}))
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateAchievementDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.achievementService.update(id, dto, file?.filename);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.achievementService.delete(id);
  }
}
