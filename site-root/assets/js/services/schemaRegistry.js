angular.module('api').factory('SchemaRegistry', function() {
    var registry = {};

    return {
        add: function(ref, schema) {
            registry[ref] = schema;
        },

        all: function() {
            return registry;
        },

        find: function(ref) {
            return registry[ref];
        },

        hasSchemas: function() {
            return !angular.equals({}, registry);
        },

        // We can do better.
        hasType: function(type) {
            for (property in registry) {
                if (registry.hasOwnProperty(property)) {
                    if (registry[property].type === type) {
                        return true;
                    }
                }
            }

            return false;
        },

        byType: function(type) {
            var schemas = {};

            for (property in registry) {
                if (registry.hasOwnProperty(property)) {
                    if (registry[property].type === type) {
                        schemas[property] = registry[property];
                    }
                }
            }

            return schemas;
        }
    };
});