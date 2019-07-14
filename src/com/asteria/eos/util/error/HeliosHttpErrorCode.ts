/**
 * The <code>HeliosHttpErrorCode</code> enum contains all Helios status code consumed by the REST API to specify an HTTP
 * error.
 */
export enum HeliosHttpErrorCode {

    /**
     * Means that the server failed to execute the current process and no error code has been identified yet.
     */
    ERR_INTERNAL_PROCESS_FAILURE = 'INTERNAL_PROCESS_FAILURE',

    /**
     * Means that the server failed to retrieve the listing of a directory.
     */
    ERR_DIRECTORY_LISTING_FAILED = 'DIRECTORY_LISTING_FAILED',

    /**
     * Means that the server failed to retrieve the specified resource.
     */
    ERR_RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND',
    
    /**
     * Means that the path to the specified resource is not valid.
     */
    ERR_RESOURCE_PATH_INVALID = 'RESOURCE_PATH_INVALID',

    /**
     * Means that the target resource is a directory while a file is expected.
     */
    ERR_RESOURCE_IS_A_DIRECTORY = 'RESOURCE_IS_A_DIRECTORY',

    /**
     * Means that the content type of an HTTP request is missing.
     */
    ERR_MISSING_CONTENT_TYPE = 'MISSING_CONTENT_TYPE',
    
    /**
     * Means that the content type of an HTTP request is not supported.
     */
    ERR_UNSUPPORTED_CONTENT_TYPE = 'UNSUPPORTED_CONTENT_TYPE',
    
    /**
     * Means that the multipart definition of an HTTP request is missing.
     */
    ERR_MULTIPART_BOUNDARY_NOT_FOUND = 'MULTIPART_BOUNDARY_NOT_FOUND'
}