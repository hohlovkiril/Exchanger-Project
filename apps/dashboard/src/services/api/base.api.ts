export default class BaseApi {
  public static createHeaders(headers: Record<string, string>): Headers {
    return new Headers({
      ...headers,
    });
  }
}