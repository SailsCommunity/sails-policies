/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your controllers.
 * You can apply one or more policies to a given controller, or protect
 * its actions individually.
 *
 * Any policy file (e.g. `api/policies/authenticated.js`) can be accessed
 * below by its filename, minus the extension, (e.g. "authenticated")
 *
 * For more information on how policies work, see:
 * http://sailsjs.org/#!/documentation/concepts/Policies
 *
 * For more information on configuring policies, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.policies.html
 */


module.exports.policies = {

    UserController: {

        /**
         * Use this for applying sourceValidation policy to all functions of UserController
         */
        //'*': sourceValidation,

        /**
         * Use this for applying policy to specific function
         */
        policiesValidation	: 'sourceValidation'

        /**
         * To use multiple policies for one function you can use this method
         */
        // policiesValidation: ['policy1', 'policy2']
    }
};
