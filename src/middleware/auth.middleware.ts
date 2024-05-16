import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      return res.status(401).send('Token de autorização não fornecido');
    }

    const token = authorizationHeader.split(' ')[1];    

    jwt.verify(token, process.env.SECRET, (err) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(401).send('Token expirado');
        }
        return res.status(401).send('Token inválido');
      }

      next();
    });
  }
}
