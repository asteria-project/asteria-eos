import { HeliosFileStats } from '../util/HeliosFileStats';

/**
 * The <code>HeliosCsvPreview</code> interface represents the preview of a CSV file served by an Helios server
 * instance.
 */
export interface HeliosCsvPreview {

    /**
     * The stats of the CSV file to preview.
     */
    stats: HeliosFileStats;

    /**
     * The preview content for the associated CSV file.
     */
    content: string;
}