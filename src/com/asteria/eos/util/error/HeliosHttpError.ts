import { HeliosHttpErrorCode } from './HeliosHttpErrorCode';

/**
 * The <code>HeliosHttpError</code> interface represents HTTP errors returned by the REST API of the Helios server.
 */
export interface HeliosHttpError {

    /**
     * The HTTP status error code.
     */
    status: number;

    /**
     * The Helios HTTP status associated with this error.
     */
    code: HeliosHttpErrorCode;

    /**
     * The functional message that describes this error.
     */
    message: string;
}