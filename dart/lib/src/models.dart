/// Response models for the Image Caption API.

/// API Response wrapper.
class ImagecaptionResponse {
  final String status;
  final dynamic error;
  final ImagecaptionData? data;

  ImagecaptionResponse({
    required this.status,
    this.error,
    this.data,
  });

  factory ImagecaptionResponse.fromJson(Map<String, dynamic> json) => ImagecaptionResponse(
    status: json['status'] as String? ?? '',
    error: json['error'],
    data: json['data'] != null ? ImagecaptionData.fromJson(json['data']) : null,
  );

  Map<String, dynamic> toJson() => {
    'status': status,
    if (error != null) 'error': error,
    if (data != null) 'data': data,
  };
}

/// Response data for the Image Caption API.

class ImagecaptionData {
  String? caption;

  ImagecaptionData({
    this.caption,
  });

  factory ImagecaptionData.fromJson(Map<String, dynamic> json) => ImagecaptionData(
      caption: json['caption'],
    );
}

class ImagecaptionRequest {
  String image;

  ImagecaptionRequest({
    required this.image,
  });

  Map<String, dynamic> toJson() => {
      'image': image,
    };
}
