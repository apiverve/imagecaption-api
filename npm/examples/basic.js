/**
 * Basic Example - Image Caption API
 *
 * This example demonstrates how to use the Image Caption API.
 * Make sure to set your API key in the .env file or replace '[YOUR_API_KEY]' below.
 */

require('dotenv').config();
const imagecaptionAPI = require('../index.js');

// Initialize the API client
const api = new imagecaptionAPI({
    api_key: process.env.API_KEY || '[YOUR_API_KEY]'
});

// Example query
// This API requires a file upload
// You can pass a file path, Buffer, or ReadStream
var filePath = '/path/to/image.jpg';

// Make the API request using callback
console.log('Making request to Image Caption API...\n');

api.executeWithFile(filePath, function (error, data) {
    if (error) {
        console.error('Error occurred:');
        if (error.error) {
            console.error('Message:', error.error);
            console.error('Status:', error.status);
        } else {
            console.error(JSON.stringify(error, null, 2));
        }
        return;
    }

    console.log('Response:');
    console.log(JSON.stringify(data, null, 2));
});
