import { Controller, FileTypeValidator, MaxFileSizeValidator, Param, ParseFilePipe, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("FILE-UPLOAD")
@Controller('file-upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

    @Put("upload-image/:id")
    @UseInterceptors(FileInterceptor("file"))
    uploadImage(
      @Param("id") productId: string,
      @UploadedFile(
        new ParseFilePipe(
          {
            validators: [
              new MaxFileSizeValidator({
                maxSize: 200000,
                message: "File must be 200kb max"
              }),
              new FileTypeValidator({
                fileType: /(jpg|jpeg|png|webp)$/
              })
            ]
          }
        )
      ) file: Express.Multer.File
    ) {
      return this.fileUploadService.uploadImage(file, productId)
    }

}
