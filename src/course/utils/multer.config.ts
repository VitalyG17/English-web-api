import {diskStorage, StorageEngine} from 'multer';
import {v4 as uuidv4} from 'uuid';
import {extname, join} from 'path';
import * as fs from 'fs';

const COURSE_UPLOAD_PATH: string = join(process.cwd(), 'uploads', 'courses');

export const courseImageStorage: StorageEngine = diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync(COURSE_UPLOAD_PATH)) {
      fs.mkdirSync(COURSE_UPLOAD_PATH, {recursive: true});
    }
    cb(null, COURSE_UPLOAD_PATH);
  },
  filename: (req, file, cb) => {
    const ext: string = extname(file.originalname);
    const filename = `${uuidv4()}${ext}`;
    cb(null, filename);
  },
});
