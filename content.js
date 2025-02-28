// Function to detect video URL from the page
function detectVideo() {
  let videoUrl = null;

  // Detect native video element
  let videoElement = document.querySelector('video');
  if (videoElement) {
    videoUrl = videoElement.src || (videoElement.querySelector('source') ? videoElement.querySelector('source').src : null);
  }

  // If no video URL found in <video>, try iframe (e.g., YouTube or Vimeo)
  if (!videoUrl) {
    let iframe = document.querySelector('iframe');
    if (iframe && iframe.src) {
      let iframeSrc = iframe.src;
      // Check if the iframe is YouTube or Vimeo (this is a simple check)
      if (iframeSrc.includes('youtube.com') || iframeSrc.includes('vimeo.com')) {
        videoUrl = iframeSrc;
      }
    }
  }

  if (videoUrl) {
    chrome.storage.local.set({ videoUrl: videoUrl });
    console.log('Video detected: ', videoUrl);
  } else {
    console.log('No video URL found.');
  }
}

// Run the video detection
detectVideo();