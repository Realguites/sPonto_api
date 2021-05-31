import { Router } from 'express';
import userRouter from './user.routes';
import loginRouter from './login.routes';
import registredTimeRouter from './registredTime.routes';

const routes = Router();


routes.use('/user',userRouter);
routes.use('/login',loginRouter);
routes.use('/registredTime',registredTimeRouter);

export default routes;
