/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2.1
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ListCustomField', 'model/TextCustomField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ListCustomField'), require('./TextCustomField'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.TemplateCustomFields = factory(root.Docusign.ApiClient, root.Docusign.ListCustomField, root.Docusign.TextCustomField);
  }
}(this, function(ApiClient, ListCustomField, TextCustomField) {
  'use strict';


  /**
   * The TemplateCustomFields model module.
   * @module model/TemplateCustomFields
   * @version 5.3.0-rc1
   */

  /**
   * Constructs a new <code>TemplateCustomFields</code>.
   * @alias module:model/TemplateCustomFields
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TemplateCustomFields</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateCustomFields} obj Optional instance to populate.
   * @return {module:model/TemplateCustomFields} The populated <code>TemplateCustomFields</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('listCustomFields')) {
        obj['listCustomFields'] = ApiClient.convertToType(data['listCustomFields'], [ListCustomField]);
      }
      if (data.hasOwnProperty('textCustomFields')) {
        obj['textCustomFields'] = ApiClient.convertToType(data['textCustomFields'], [TextCustomField]);
      }
    }
    return obj;
  }

  /**
   * An array of list custom fields.
   * @member {Array.<module:model/ListCustomField>} listCustomFields
   */
  exports.prototype['listCustomFields'] = undefined;
  /**
   * An array of text custom fields.
   * @member {Array.<module:model/TextCustomField>} textCustomFields
   */
  exports.prototype['textCustomFields'] = undefined;



  return exports;
}));


