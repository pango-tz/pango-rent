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

export interface EnquiryResource {
    enquiryReferenceId?: string;

    /**
     * The subject of this Enquiry. For Example Interested, or Need More Information about this Unit etc
     */
    subject?: string;

    /**
     * The quick introduction about the prospective tenant and their needs. For Example. I`m John Doe, married and blessed with two children teaching at Mawenzi Sec , searching for a home to accommodate my family
     */
    introduction?: string;

    /**
     * Detailed message to the landlord inticating the intentions and expected responses. For Example. I`m interested in this property and I would like you to schedule me up for site visit as soon as possible
     */
    message?: string;

    /**
     * The Enquiry date and time of the enquiry
     */
    enquiredOn?: string;

    /**
     * referenceId of the user who made the enquiry
     */
    enquiredBy?: string;

    /**
     * Type of the enquiry - INTERESTED, REQUEST_INFO, SITE_VISIT, TAKEN or BOOK_PROPERTY
     */
    enquiredType?: string;

    /**
     * referenceId of the property against which the enquiry is made
     */
    propertyReferenceId?: string;

    /**
     * Total messages count exchanged between the two parties to this Enquiry
     */
    correspondenceCount?: number;

    /**
     * An array of correspondence, applicable to only to the get operation.
     */
    correspondence?: Array<models.CorrespondenceResource>;

}
