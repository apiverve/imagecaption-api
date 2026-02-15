using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.ImageCaption
{
    /// <summary>
    /// Query options for the Image Caption API
    /// </summary>
    public class ImageCaptionQueryOptions
    {
        /// <summary>
        /// Upload an image file to generate a caption (supported formats: JPG, PNG, GIF, max 5MB)
        /// </summary>
        [JsonProperty("image")]
        public string Image { get; set; }
    }
}
