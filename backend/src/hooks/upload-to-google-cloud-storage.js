/* eslint-disable no-empty */
/* eslint-disable no-useless-catch */
/* eslint-disable import/no-anonymous-default-export */
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const { Storage } = require("@google-cloud/storage");
const { v4: uuidv4 } = require("uuid");
module.exports = (key) => {
    return async (context) => {
        const { data, app } = context;
        if (!data[key]) {
            return context;
        }
        let fileName = `${uuidv4()}.jpeg`;
        const encodedStream = data[key].split("base64,")[1];
        if (encodedStream) {
            const decodedStream = Buffer.from(encodedStream, "base64");
            const googleCloudStorageConfig = app.get("google-cloud-storage");
            const storage = new Storage({
                credentials: googleCloudStorageConfig.secret,
            });
            const bucket = storage.bucket(googleCloudStorageConfig.bucket);
            await bucket.makePublic();
            const file = bucket.file(fileName);
            try {
                const writeStream = file.createWriteStream({
                    metadata: {
                        contentType: "image/jpeg",
                    },
                });

                writeStream.write(decodedStream);
                writeStream.end();
                while (!(await writeStream.writableEnded)) {}
                context.data[key] = file.publicUrl();
            } catch (err) {
                throw err;
            }
        }
        return context;
    };
};
