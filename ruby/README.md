# Image Caption API - Ruby Gem

Image Caption generates natural language descriptions for uploaded image files. Upload a JPG, PNG, or GIF up to 5MB to receive an automated caption for alt text and media tagging.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_imagecaption'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_imagecaption
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_imagecaption'

# Initialize the client
client = APIVerve::Imagecaption::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg" })

# Print the response
puts response
```

### File Upload

```ruby
# Upload a file
response = client.execute_with_file("/path/to/file.jpg")

# Or use a URL
response = client.execute_with_url("https://example.com/image.jpg")
```

### Error Handling

```ruby
begin
  response = client.execute({ image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg" })
  puts response["data"]
rescue APIVerve::Imagecaption::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Imagecaption::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Imagecaption::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "caption": "A golden retriever running through a grassy field on a sunny day"
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/imagecaption?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/imagecaption?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/imagecaption?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
