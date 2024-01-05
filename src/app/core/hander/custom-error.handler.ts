import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { CustomMessage } from 'src/app/shared/models/message.interface';
import { CustomMessageType } from 'src/app/shared/types/custom-message-class.type';

const UNAUTHORIZEDERROR = '401 UNAUTHORIZED';
@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  constructor(
  ) { }
  handleError(error: any) {
    let errorMessage: CustomMessage = {
      errorMessageDisplay: '',
    };
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        errorMessage = {
          errorCode: '',
          errorMessageDisplay: 'Ocurrió un error, revise la consola',
          errorMessage: `Error: ${error.error.message}`,
          typeMessage: CustomMessageType.ERROR,
        };
      } else if (
        error.status === 401 ||
        (error.error && error.error.errorMessage === UNAUTHORIZEDERROR)
      ) {
        errorMessage = {
          errorCode: error.status.toString(),
          errorMessageDisplay: 'Su sesión es inválida, recargue la página',
          errorMessage: error.message,
          typeMessage: CustomMessageType.ERROR,
          url: error.url,
        };
      } else if (error.status === 412) {
        errorMessage = {
          errorCode: error.status.toString(),
          errorMessageDisplay: error.error?.errorMessageDisplay,
          errorMessage: error.message,
          typeMessage: CustomMessageType.ERROR,
          url: error.url,
          detailErrorMessage: error.error?.detailErrorMessage,
        };
      } else if (error.error && error.error.errorCode) {
        errorMessage = {
          errorCode: error.error.errorCode,
          errorMessageDisplay: error.error.errorMessageDisplay,
          errorMessage: error.error.errorMessage,
          typeMessage: CustomMessageType.ERROR,
        };
      } else {
        errorMessage = {
          errorCode: error.status.toString(),
          errorMessageDisplay: 'Ocurrió un error, revise la consola',
          errorMessage: `Error Code: ${error.status},  Message: ${error.message}`,
          typeMessage: CustomMessageType.ERROR,
          url: error.url,
        };
      }
    } else {
      errorMessage = {
        errorMessageDisplay: error.errorMessageDisplay,
        typeMessage: error.typeMessage,
      };
    }
    this.displayMessage(errorMessage);
    this.printMessage(errorMessage);
  }

  displayMessage(errorMessage: CustomMessage) {
    console.group('AppError');
    console.error('ErrorCode: ', errorMessage.errorCode);
    console.error('TypeMessage: ', errorMessage.typeMessage);
    console.error('ErrorMessage: ', errorMessage.errorMessage);
    console.error('ErrorMessageDisplay: ', errorMessage.errorMessageDisplay);
    console.error('DetailErrorMessage: ', errorMessage.detailErrorMessage);
    console.groupEnd();
  }

  printMessage(errorMessage: CustomMessage) {
    alert(errorMessage.errorMessageDisplay)
  }
}
