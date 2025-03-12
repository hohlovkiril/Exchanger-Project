import { SERVER_URI } from "../../common/constants";
import { OrderDataType } from "../../common/types";
import BaseApi from "./base.api";

export default class OrderApi extends BaseApi {
  /**
   * 
   * @param access_token 
   * @param payload 
   * @returns 
   */
  public static async getMany(access_token: string, payload?: {}): Promise<OrderDataType[]> {
    try {
      const request = await fetch(`${SERVER_URI}/api/order`, {
        method: 'GET',
        headers: OrderApi.createHeaders({
          'Authorization': `Bearer ${access_token}`
        }),
      });

      if (!request.ok) {
        throw new Error(`Request failed: ${request.statusText}`);
      }

      const response = await request.json();

      if (response.statusCode) {
        throw new Error(`Request failed: ${response.message}`);
      }

      return response;
    } catch (err) {
      throw new Error(
        `Error during fetch order data: ${err instanceof Error ? err.message : 'Unknow error'}`
      )
    }
  }
}