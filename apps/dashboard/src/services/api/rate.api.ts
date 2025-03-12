import { SERVER_URI } from "../../common/constants";
import { RateDataType } from "../../common/types";
import { RateFormType } from "../../components/widgets/RateForm";
import BaseApi from "./base.api";

export default class RateApi extends BaseApi {
  /**
   * 
   * @param access_token 
   * @param id 
   * @returns 
   */
  public static async getOne(access_token: string, id: number | string): Promise<RateDataType> {
    try {
      const request = await fetch(`${SERVER_URI}/api/rate/${id}`, {
        method: 'GET',
        headers: RateApi.createHeaders({
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
        `Error during fetch currency data: ${err instanceof Error ? err.message : 'Unknow error'}`
      )
    }
  }
    /**
     * 
     * @param access_token 
     * @returns 
     */
    public static async getMany(access_token: string, payload?: {}): Promise<RateDataType[]> {
      try {
        const request = await fetch(`${SERVER_URI}/api/rate`, {
          method: 'GET',
          headers: RateApi.createHeaders({
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
          `Error during fetch currency data: ${err instanceof Error ? err.message : 'Unknow error'}`
        )
      }
    }
  /**
   * 
   * @param access_token 
   * @param payload 
   * @returns 
   */
  public static async create(access_token: string, payload: RateFormType): Promise<RateDataType> {
    try {
      const request = await fetch(`${SERVER_URI}/api/rate`, {
        method: 'POST',
        headers: RateApi.createHeaders({
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(payload),
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
        `Error during fetch currency data: ${err instanceof Error ? err.message : 'Unknow error'}`
      )
    }  
  }
  /**
   * 
   * @param access_token 
   * @param id 
   * @param payload 
   * @returns 
   */
  public static async update(access_token: string, id: number | string, payload: RateFormType): Promise<RateDataType> {
    try {
      const request = await fetch(`${SERVER_URI}/api/rate/${id}`, {
        method: 'PATCH',
        headers: RateApi.createHeaders({
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(payload),
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
        `Error during fetch currency data: ${err instanceof Error ? err.message : 'Unknow error'}`
      )
    }
  } 
  /**
   * 
   * @param access_token 
   * @param id 
   * @returns 
   */
  public static async remove(access_token: string, id: number | string): Promise<RateDataType> {
    try {
      const request = await fetch(`${SERVER_URI}/api/rate/${id}`, {
        method: 'DELETE',
        headers: RateApi.createHeaders({
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
        `Error during fetch currency data: ${err instanceof Error ? err.message : 'Unknow error'}`
      )
    }
  }
}