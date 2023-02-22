var profilePic = document.getElementById('picjs');
profilePic.addEventListener('mouseover', function() {
  profilePic.style.transform = 'scale(1.2)';
  profilePic.style.transition = 'transform 0.2s';
});
profilePic.addEventListener('mouseout', function() {
  profilePic.style.transform = 'scale(1)';
  profilePic.style.transition = 'transform 0.5s';
});

// var img = document.getElementById("picjs");
// img.addEventListener("mouseover", function() {
//   img.classList.add("fade");
//   img.src = "photo2.png";
// });
// img.addEventListener("mouseout", function() {
//   img.classList.remove("fade");
//   img.src = "photo.jpg";
// });
