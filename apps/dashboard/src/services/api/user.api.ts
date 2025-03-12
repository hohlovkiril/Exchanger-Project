import { SERVER_URI } from "../../common/constants";
import { UserType } from "../../common/types";
import BaseApi from "./base.api";

export default class UserApi extends BaseApi {
  public static async getMany(access_token: string, payload?: {}): Promise<UserType[]> {
    try {
      const request = await fetch(
        `${SERVER_URI}/api/user`, {
          method: 'GET',
          headers: UserApi.createHeaders({
            'Authorization': `Bearer ${access_token}`
          })
        }
      );

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
        `Error during fetch user data: ${err instanceof Error ? err.message : 'Unknow error'}`
      )
    }
  }
}