export class CMSError extends Error {
  constructor(message, statusCode, technical) {
    super(message);
    this.name = 'CMSError';
    this.statusCode = statusCode;
    this.technical = technical;
  }
}

export class NotFoundError extends CMSError {
  constructor(message = 'Resource not found') {
    super(message, 404);
    this.name = 'NotFoundError';
  }
}

export class ApiError extends CMSError {
  constructor(status, url) {
    super('Failed to fetch data', status, `CMS returned ${status} for ${url}`);
    this.name = 'ApiError';
  }
}
