# Image Caption API - Dart/Flutter Client

Image Caption is an AI-powered tool that generates descriptive captions for images. Simply upload an image and receive a natural language description of its contents.

[![pub package](https://img.shields.io/pub/v/apiverve_imagecaption.svg)](https://pub.dev/packages/apiverve_imagecaption)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the Dart/Flutter client for the [Image Caption API](https://apiverve.com/marketplace/imagecaption?utm_source=dart&utm_medium=readme).

## Installation

Add this to your `pubspec.yaml`:

```yaml
dependencies:
  apiverve_imagecaption: ^1.1.14
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
    final response = await client.execute({
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/640px-Cat03.jpg'
    });

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

- **API Home:** [Image Caption API](https://apiverve.com/marketplace/imagecaption?utm_source=dart&utm_medium=readme)
- **Documentation:** [docs.apiverve.com/ref/imagecaption](https://docs.apiverve.com/ref/imagecaption?utm_source=dart&utm_medium=readme)

## Authentication

All requests require an API key. Get yours at [apiverve.com](https://apiverve.com?utm_source=dart&utm_medium=readme).

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with Dart for [APIVerve](https://apiverve.com?utm_source=dart&utm_medium=readme)
