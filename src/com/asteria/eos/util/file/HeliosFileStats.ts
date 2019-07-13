/**
 * The <code>HeliosFileStats</code> object provides information about a file in the workspace of an Helios server
 * instance.
 */
export interface HeliosFileStats {

    /**
     * The path to the file in the file system.
     */
    path: string;

    /**
     * The name of the file.
     */
    name: string;

    /**
     * The extention of the file.
     */
    extention: string;

    /**
     * The size of the file in bytes.
     */
    size: number;

    /**
     * A bit-field describing the file type and mode.
     */
    mode: number;

    /**
     * The timestamp indicating the creation time of this file expressed in milliseconds since the POSIX Epoch.
     */
    birthtime: number;

    /**
     * The timestamp indicating the last time this file was modified expressed in milliseconds since the POSIX Epoch.
     */
    updatetime: number;

    /**
     * Indicates whether the this object describes a regular file (<code>true</code>), or not (<code>false</code>).
     */
    isFile: boolean;
}