/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
	define(['Configuration', 'ApiClient', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.OrganizationsApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.ErrorDetails);
  }
}(this, function(Configuration, ApiClient, ErrorDetails) {
  'use strict';

  /**
   * Organizations service.
   * @module api/OrganizationsApi
   * @version 4.6.0
   */

  /**
   * Constructs a new OrganizationsApi. 
   * @alias module:api/OrganizationsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient() || ApiClient.instance;


    this.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    };

    this.getApiClient = function() {
      return this.apiClient;
    };


    /**
     * (Optional)Callback function to receive the result of the deleteReport operation. If none specified a Promise will be returned.
     * @callback module:api/OrganizationsApi~deleteReportCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Retrieves org level report by correlation id and site.
     * @param {String} organizationId 
     * @param {String} reportCorrelationId 
     * @param {module:api/OrganizationsApi~deleteReportCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteReport = function(organizationId, reportCorrelationId, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteReport");
      }

      // verify the required parameter 'reportCorrelationId' is set
      if (reportCorrelationId == undefined || reportCorrelationId == null) {
        throw new Error("Missing the required parameter 'reportCorrelationId' when calling deleteReport");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'organizationId': organizationId,
        'reportCorrelationId': reportCorrelationId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/organization_reporting/{organizationId}/reports/{reportCorrelationId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getReport operation. If none specified a Promise will be returned.
     * @callback module:api/OrganizationsApi~getReportCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Retrieves org level report by correlation id and site.
     * @param {String} organizationId 
     * @param {String} reportCorrelationId 
     * @param {module:api/OrganizationsApi~getReportCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getReport = function(organizationId, reportCorrelationId, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getReport");
      }

      // verify the required parameter 'reportCorrelationId' is set
      if (reportCorrelationId == undefined || reportCorrelationId == null) {
        throw new Error("Missing the required parameter 'reportCorrelationId' when calling getReport");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'organizationId': organizationId,
        'reportCorrelationId': reportCorrelationId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/organization_reporting/{organizationId}/reports/{reportCorrelationId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));
