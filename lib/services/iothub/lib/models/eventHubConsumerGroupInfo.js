/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the EventHubConsumerGroupInfo class.
 * @constructor
 * The properties indicating the EventHubConsumerGroupInfo.
 *
 * @member {object} [tags] The tags.
 * 
 * @member {string} [id] The event hub consumer group identifier.
 * 
 * @member {string} [name] The event hub consumer group name.
 * 
 */
function EventHubConsumerGroupInfo() {
}

/**
 * Defines the metadata of EventHubConsumerGroupInfo
 *
 * @returns {object} metadata of EventHubConsumerGroupInfo
 *
 */
EventHubConsumerGroupInfo.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'EventHubConsumerGroupInfo',
    type: {
      name: 'Composite',
      className: 'EventHubConsumerGroupInfo',
      modelProperties: {
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = EventHubConsumerGroupInfo;
