import { CustomMessageType } from '../types/custom-message-class.type';

export interface CustomMessage {
  errorCode?: string;
  errorMessage?: string;
  errorMessageDisplay: string;
  typeMessage?: CustomMessageType;
  url?: string | null;
  detailErrorMessage?: string;
}

export class ErrorMessage implements CustomMessage {
  constructor(errorMessageDisplay: string, typeMessage: CustomMessageType) {
    this.errorMessageDisplay = errorMessageDisplay;
    this.typeMessage = typeMessage;
  }

  errorMessageDisplay: string = '';
  typeMessage: CustomMessageType;
}
