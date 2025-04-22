import {Controller, Delete, Get, Req, UseGuards} from '@nestjs/common';
import {ProfileService} from './profile.service';
import {JwtAuthGuard} from '../auth/guards/jwt-auth.guard';

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
}
