document.getElementById('translateButton').addEventListener('click', async () => {
  // Get the video URL from local storage (set by the content script)
  chrome.storage.local.get('videoUrl', function(data) {
    if (data.videoUrl) {
  
      let signLanguageUrl = mapVideoToSignLanguage(data.videoUrl);

      // Display and play the sign language video
      document.getElementById('signLanguageVideo').src = signLanguageUrl;
      document.getElementById('signLanguageVideoContainer').style.display = 'block';
      document.getElementById('signLanguageVideo').play();
    } else {
      alert('No video detected.');
    }
  });
});

function mapVideoToSignLanguage(videoUrl) {
  // Example logic for mapping. You can expand this with real mappings.
  if (videoUrl.includes('movie.mp4')) {
    return 'https://www.w3schools.com/html/movie_sign_language.mp4';  // Example pre-recorded sign language video
  } else {
    return 'https://via.placeholder.com/640x360?text=Sign+Language+Video';  
  }
}
