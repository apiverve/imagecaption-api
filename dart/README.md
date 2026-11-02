# Image Caption API - Dart/Flutter Client

Image Caption generates natural language descriptions for uploaded image files. Upload a JPG, PNG, or GIF up to 5MB to receive an automated caption for alt text and media tagging.

[![pub package](https://img.shields.io/pub/v/apiverve_imagecaption.svg)](https://pub.dev/packages/apiverve_imagecaption)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the Dart/Flutter client for the [Image Caption API](https://apiverve.com/marketplace/imagecaption?utm_source=dart&utm_medium=referral&utm_content=readme).

## Installation

Add this to your `pubspec.yaml`:

```yaml
dependencies:
  apiverve_imagecaption: ^1.2.4
```

Then run:

```bash
dart pub get
# or for Flutter
flutter pub get
```

## Usage

```dart
import 'package:apiverve_imagecaption/apiverve_imagecaption.dart';

void main() async {
  final client = ImagecaptionClient('YOUR_API_KEY');

  try {
    // This API requires a file upload — a JSON body is rejected with a 400.
    final response = await client.executeWithFile('/path/to/your-file');

    print('Status: ${response.status}');
    print('Data: ${response.data}');
  } catch (e) {
    print('Error: $e');
  }
}
```

## Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "caption": "A golden retriever running through a grassy field on a sunny day"
  }
}
```

## API Reference

- **API Home:** [Image Caption API](https://apiverve.com/marketplace/imagecaption?utm_source=dart&utm_medium=referral&utm_content=readme)
- **Documentation:** [docs.apiverve.com/ref/imagecaption](https://docs.apiverve.com/ref/imagecaption?utm_source=dart&utm_medium=referral&utm_content=readme)

## Authentication

All requests require an API key. Get yours at [apiverve.com](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme).

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with Dart for [APIVerve](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme)
