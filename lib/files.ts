"use strict";
import * as fs from 'fs';
import * as path from 'path';

/**
 * Utility functions for files
 */

class FileTools {

    /**
     * Used for directory testing/creation. Takes the current working directory (cwd)
     * and a relative path to a directory, and creates the directory if it does not exist
     *
     * @param {string} cwd The current working directory
     * @param {string} relative_path Relative path to a new or pre-existing folder
     * @returns {string} Returns the full path of the new directory
     */
    static createReturnFullPath(cwd: string, relative_path: string): string {
        const new_directory = path.join(cwd, relative_path);
        if(!fs.existsSync(new_directory)) {
            fs.mkdirSync(new_directory);
        }
        return new_directory;
    }
}

export {FileTools as files};