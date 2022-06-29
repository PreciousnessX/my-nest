import {
  Controller,
  Get,
  Post,
  HttpStatus,
  Response,
  Param,
} from '@nestjs/common';

@Controller()
export class UsersController {
  @Get('users')
  getAllUsers(@Response() res) {
    res.status(HttpStatus.OK).json([{ id: 1, name: 'Test' }]);
  }

  @Get('users/:id')
  getuser(@Response() res, @Param('id') id) {
    res.status(HttpStatus.OK).json([{ id, name: 'Test' }]);
  }
  @Post('users')
  addUser(@Response() res) {
    console.log('123');
    res.status(HttpStatus.OK).json([{ success: true }]);
  }
}
