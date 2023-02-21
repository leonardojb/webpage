var profilePic = document.getElementById('picjs');
profilePic.addEventListener('mouseover', function() {
  profilePic.style.transform = 'scale(1.2)';
  profilePic.style.transition = 'transform 0.2s';
});
profilePic.addEventListener('mouseout', function() {
  profilePic.style.transform = 'scale(1)';
  profilePic.style.transition = 'transform 0.5s';
});