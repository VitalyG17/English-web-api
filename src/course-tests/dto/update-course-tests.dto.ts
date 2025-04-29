import {PartialType} from '@nestjs/mapped-types';
import {CreateCourseTestsDto} from './create-course-tests.dto';

export class UpdateCourseTestsDto extends PartialType(CreateCourseTestsDto) {}
