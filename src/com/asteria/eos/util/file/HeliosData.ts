import { Application } from 'jsax-rs';

/**
 * The <code>HeliosData</code> interface represents the data structure returned by the REST API of the Helios server.
 */
export interface HeliosData<T> {

    /**
     * The data for this object.
     */
    data: T;
    
    /**
     * A timestamp that represents the creation date for this object.
     */
    birthtime: number;

    /**
     * The ID of the server that has created this object.
     */
    serverId: string;

    /**
     * The HATEOAS application state.
     */
    application: Application;
}