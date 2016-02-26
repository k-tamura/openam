/*
 * The contents of this file are subject to the terms of the Common Development and
 * Distribution License (the License). You may not use this file except in compliance with the
 * License.
 *
 * You can obtain a copy of the License at legal/CDDLv1.0.txt. See the License for the
 * specific language governing permission and limitations under the License.
 *
 * When distributing Covered Software, include this CDDL Header Notice in each file and include
 * the License file at legal/CDDLv1.0.txt. If applicable, add the following below the CDDL
 * Header, with the fields enclosed by brackets [] replaced by your own identifying
 * information: "Portions copyright [year] [name of copyright owner]".
 *
 * Copyright 2016 ForgeRock AS.
 */

define("org/forgerock/openam/ui/common/models/JSONValues", [
    "lodash"
], (_) => {
    function JSONValues (values) {
        this.raw = Object.freeze(values);
    }

    JSONValues.prototype.pick = function (predicate) {
        return new JSONValues(_.pick(this.raw, predicate));
    };

    JSONValues.prototype.omit = function (predicate) {
        return new JSONValues(_.omit(this.raw, predicate));
    };

    // JSONValues.prototype.mapEmpty = function () {
    //     const keys = _.pick(this.raw, (value) => {
    //         if (_.isBoolean(value)) {
    //             return false;
    //         }
    //         if (_.isNumber(value)) {
    //             return value === 0;
    //         }
    //
    //         return _.isEmpty(value);
    //     });
    //
    //     return _.keys(keys);
    // };

    return JSONValues;
});
