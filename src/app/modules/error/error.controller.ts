import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ErrorService } from './error.service'
import { Response } from 'express';

// @TODO move to /api
@ApiTags('error')
@Controller('error')
export class ErrorController {
  constructor(private readonly errorService: ErrorService) {}
  @Get(':status')
  @ApiResponse({ status: 404, description: 'Not found' })
  async get(@Res() response: Response, @Param('status') status: string): Promise<Response<any, Record<string, any>>> {
    return this.errorService.default(response, Number(status));
  }

  @Post(':status')
  @ApiOperation({ summary: 'Error on POST' })
  @ApiResponse({ status: 404, description: 'Not found' })
  async post(@Res() response: Response, @Param('status') status: string): Promise<Response<any, Record<string, any>>> {
    return this.errorService.default(response, Number(status));
  }

  @Put(':status')
  @ApiOperation({ summary: 'Error on PUT' })
  @ApiResponse({ status: 404, description: 'Not found' })
  async put(@Res() response: Response, @Param('status') status: string): Promise<Response<any, Record<string, any>>> {
    return this.errorService.default(response, Number(status));
  }

  @Delete(':status')
  @ApiOperation({ summary: 'Error on DELETE' })
  @ApiResponse({ status: 404, description: 'Not found' })
  async delete(@Res() response: Response, @Param('status') status: string): Promise<Response<any, Record<string, any>>> {
    return this.errorService.default(response, Number(status));
  }
}
