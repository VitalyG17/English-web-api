import {diskStorage, StorageEngine} from 'multer';
import {v4 as uuidv4} from 'uuid';
import {extname, join} from 'path';
import * as fs from 'fs';

const ACHIEVEMENT_UPLOAD_PATH: string = join(process.cwd(), 'uploads', 'achievements');

export const achievementImageStorage: StorageEngine = diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync(ACHIEVEMENT_UPLOAD_PATH)) {
      fs.mkdirSync(ACHIEVEMENT_UPLOAD_PATH, {recursive: true});
    }
    cb(null, ACHIEVEMENT_UPLOAD_PATH);
  },
  filename: (req, file, cb) => {
    const ext: string = extname(file.originalname);
    const filename = `${uuidv4()}${ext}`;
    cb(null, filename);
  },
});
