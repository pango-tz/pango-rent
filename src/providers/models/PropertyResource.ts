/**
 * Pango API
 * Move you App forwad with Pango API
 *
 * OpenAPI spec version: 0.0.10
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as models from './models';

export interface PropertyResource {
    propertyReferenceId?: string;

    /**
     * Unit number of the property
     */
    propertyUnitId?: string;

    /**
     * summary description of the property
     */
    propertyDescription?: string;

    /**
     * Information representing whether the property is for rent or sale
     */
    listingFor?: string;

    propertyRent?: models.PropertyRent;

    propertyFeature?: models.PropertyFeature;

    /**
     * Value represeanting whether the property is available now or soon
     */
    availability?: string;

    /**
     * Number representing everage stars rating out of 5 for this property
     */
    rating?: number;

    /**
     * Total number of tenant reviews on this property to date
     */
    reviewCount?: number;

    coverPhoto?: models.Attachment;

    /**
     * Total distnace in Kelometers from the location
     */
    distance?: number;

    address?: models.Address;

    /**
     * value representing the reference Id of the owner
     */
    ownerReferenceId?: string;

}