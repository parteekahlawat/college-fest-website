const uploadToGoogleCloudStorage = require("../../hooks/upload-to-google-cloud-storage");

module.exports = {
    before: {
        all: [],
        find: [],
        get: [],
        create: [uploadToGoogleCloudStorage("studentIdImage")],
        update: [],
        patch: [],
        remove: [],
    },

    after: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },

    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },
};
