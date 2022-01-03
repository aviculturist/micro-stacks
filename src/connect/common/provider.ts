import { FinishedTxData } from '../popup';

export interface StacksProvider {
  /**
   * Make a transaction request
   *
   * @param payload - a JSON web token representing a transaction request
   */
  transactionRequest(payload: string): Promise<FinishedTxData>;

  /**
   * Request to update the wallet profile
   *
   * NOTE: this is not implemented in the wallet yet
   *
   * @param payload - a JSON web token representing a transaction request
   */
  profileUpdateRequest(payload: string): Promise<string>;

  /**
   * Make an authentication request
   *
   * @param payload - a JSON web token representing an auth request
   *
   * @returns an authResponse string in the form of a JSON web token
   */
  authenticationRequest(payload: string): Promise<string>;

  /**
   * Get the currently selected network from the wallet
   *
   * @returns a Network object, e.g., {"url":"https://stacks-node-api.testnet.stacks.co","name":"Testnet","chainId":2147483648}
   *
   */
  getCurrentNetwork:
    | undefined
    | (() => {
        url: string;
        name: string;
        chainId: string;
      });

  getProductInfo:
    | undefined
    | (() => {
        version: string;
        name: string;
        meta?: {
          tag?: string;
          commit?: string;
          [key: string]: any;
        };
        [key: string]: any;
      });
}
