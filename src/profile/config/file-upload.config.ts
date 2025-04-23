import {join} from 'path';

export const UPLOAD_CONFIG = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  UPLOAD_PATH: join(process.cwd(), 'uploads'),
  ALLOWED_MIME_TYPES: ['image/jpeg', 'image/png', 'image/gif'],
};
