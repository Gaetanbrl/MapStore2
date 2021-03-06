/*
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const DOWNLOAD_FEATURES = "WFSDOWNLOAD::DOWNLOAD_FEATURES";
const DOWNLOAD_FINISHED = "WFSDOWNLOAD::DOWNLOAD_FINISHED";
const DOWNLOAD_OPTIONS_CHANGE = "WFSDOWNLOAD::FORMAT_SELECTED";

/**
 * Actions for WFS Download
 * @memberof actions
 * @name wfsdownload
 * @type {Object}
 */
module.exports = {
    DOWNLOAD_FEATURES,
    DOWNLOAD_OPTIONS_CHANGE,
    DOWNLOAD_FINISHED,
    /**
     * action to download features
     * @memberof actions.wfsdownload
     * @param  {string} url             the URL of WFSDownload
     * @param  {object} filterObj       the object that represent the WFS filterObj
     * @param  {object} downloadOptions download options e.g. `{singlePage: true|false, selectedFormat: "csv"}`
     * @return {action}                 The action of type `DOWNLOAD_FEATURES`
     */
    downloadFeatures: (url, filterObj, downloadOptions) => ({
        type: DOWNLOAD_FEATURES,
        url,
        filterObj,
        downloadOptions
    }),
    /**
     * action for change download options
     * @memberof actions.wfsdownload
     * @param  {string} key             the value key to change. e.g. selectedFormat
     * @param  {string|boolean} value   the value of the option
     * @return {action}                 the action of type `DOWNLOAD_OPTIONS_CHANGE`
     */
    onDownloadOptionChange: (key, value) => ({
        type: DOWNLOAD_OPTIONS_CHANGE,
        key,
        value
    }),
    /**
     * action that notifies the end of the downloadOptions
     * @memberof actions.wfsdownload
     * @return {action} action of type `DOWNLOAD_FINISHED`
     */
    onDownloadFinished: () => ({
        type: DOWNLOAD_FINISHED
    })
};
