import { Product } from "./product";
import { ResponseModel } from "./responseModel";

export interface ProductTResponseModel extends ResponseModel {
    data:Product[]    
}