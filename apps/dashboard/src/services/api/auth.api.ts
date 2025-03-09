import BaseApi from "./base.api";
import { SERVER_URI } from "../../common/constants";
import { UserType } from "../../common/types";

export default class AuthApi extends BaseApi {
  /**
   * 
   * @param access_token 
   * @returns 
   */
  public static async validation(access_token: string): Promise<UserType> {
    try {
      const request = await fetch(`${SERVER_URI}/api/auth`, {
        method: 'GET',
        headers: AuthApi.createHeaders({
          'Authorization': `Bearer ${access_token}`,
        }),
      });

      if (!request.ok) {
        throw new Error(`Authentication failed: ${request.statusText}`);
      }

      const response = await request.json();

      if (response.statusCode) {
        throw new Error(`Authentication failed: ${response.message}`);
      }

      return response;
    } catch (err) {
      throw new Error(
        `Error during authentication: ${err instanceof Error ? err.message : 'Unknown error'}`
      );
    }
  }
  /**
   * 
   * @param payload 
   * @returns 
   */
  public static async logIn(payload: object): Promise<{ access_token: string }> {
    try {
      const request = await fetch(`${SERVER_URI}/api/auth/login`, {
        method: 'POST',
        headers: AuthApi.createHeaders({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(payload),
      });

      if (!request.ok) {
        throw new Error(`Authentication failed: ${request.statusText}`);
      }

      const response = await request.json();

      if (response.statusCode) {
        throw new Error(`Authentication failed: ${response.message}`);
      }

      return response;
    } catch (err) {
      throw new Error(
        `Error during authentication: ${err instanceof Error ? err.message : 'Unknown error'}`
      );
    }
  }
  /**
   * 
   * @param payload 
   * @returns 
   */
  public static async signIn(payload: object): Promise<{ access_token: string }> {
    try {
      const request = await fetch(`${SERVER_URI}/api/auth`, {
        method: 'POST',
        headers: AuthApi.createHeaders({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(payload),
      });

      if (!request.ok) {
        throw new Error(`Authentication failed: ${request.statusText}`);
      }

      const response = await request.json();

      if (response.statusCode) {
        throw new Error(`Authentication failed: ${response.message}`);
      }

      return response;
    } catch (err) {
      throw new Error(
        `Error during authentication: ${err instanceof Error ? err.message : 'Unknown error'}`
      );
    }
  }
}