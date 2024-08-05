"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const file_upload_service_1 = require("./file-upload.service");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
let FileUploadController = class FileUploadController {
    constructor(fileUploadService) {
        this.fileUploadService = fileUploadService;
    }
    uploadImage(productId, file) {
        return this.fileUploadService.uploadImage(file, productId);
    }
};
exports.FileUploadController = FileUploadController;
__decorate([
    (0, common_1.Put)("upload-image/:id"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file")),
    openapi.ApiResponse({ status: 200, type: require("../entities/products.entity").Products }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({
                maxSize: 200000,
                message: "File must be 200kb max"
            }),
            new common_1.FileTypeValidator({
                fileType: /(jpg|jpeg|png|webp)$/
            })
        ]
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FileUploadController.prototype, "uploadImage", null);
exports.FileUploadController = FileUploadController = __decorate([
    (0, swagger_1.ApiTags)("FILE-UPLOAD"),
    (0, common_1.Controller)('file-upload'),
    __metadata("design:paramtypes", [file_upload_service_1.FileUploadService])
], FileUploadController);
//# sourceMappingURL=file-upload.controller.js.map