import BaseApi from "./base.api";
import { SERVER_URI } from "../../common/constants";
import { CurrencyDataType } from "../../common/types";
import { CurrencyFormType } from "../../components/widgets/CurrencyForm";

export default class CurrencyApi extends BaseApi {
  /**
   * 
   * @param access_token 
   * @param id 
   * @returns 
   */
  public static async getOne(access_token: string, id: number | string): Promise<CurrencyDataType> {
    try {
      const request = await fetch(`${SERVER_URI}/api/currency/${id}`, {
        method: 'GET',
        headers: CurrencyApi.createHeaders({
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
  public static async getMany(access_token: string, payload?: {}): Promise<CurrencyDataType[]> {
    try {
      const request = await fetch(`${SERVER_URI}/api/currency`, {
        method: 'GET',
        headers: CurrencyApi.createHeaders({
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
  public static async create(access_token: string, payload: CurrencyFormType): Promise<CurrencyDataType> {
    try {
      const request = await fetch(`${SERVER_URI}/api/currency`, {
        method: 'POST',
        headers: CurrencyApi.createHeaders({
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
  public static async update(access_token: string, id: number | string, payload: CurrencyFormType): Promise<CurrencyDataType> {
    try {
      const request = await fetch(`${SERVER_URI}/api/currency/${id}`, {
        method: 'PATCH',
        headers: CurrencyApi.createHeaders({
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
  public static async remove(access_token: string, id: number | string): Promise<CurrencyDataType> {
    try {
      const request = await fetch(`${SERVER_URI}/api/currency/${id}`, {
        method: 'DELETE',
        headers: CurrencyApi.createHeaders({
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