var myvid = document.getElementById('video');
var myvids = [
  "videos\video1.mp4", 
  "videos\video2.mp4"
  ];
var activeVideo = 0;

myvid.addEventListener('ended', function(e) {
  // update the new active video index
  activeVideo = (++activeVideo) % myvids.length;

  // update the video source and play
  myvid.src = myvids[activeVideo];
  myvid.play();
});