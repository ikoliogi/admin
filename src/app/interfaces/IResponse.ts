export interface IResponse {
  success: boolean;
  errors?: any[];
  message?: string;
  [key: string]: any; // mporei na er8ei otidhpote, opoioudhpote typou
}
