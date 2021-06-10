export class AuthorizationEntradaDTO {
  public grant_type: string | null = null;
  public client_id: string | null = null;
  public username: string | null = null;
  public password: string | null = null;
  public client_secret: string | null = null;
  public refresh_token: string | null = null;
}
