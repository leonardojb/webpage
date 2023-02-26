var profilePic = document.getElementById('picjs');
profilePic.addEventListener('mouseover', function() {
  profilePic.style.transform = 'scale(1.2)';
  profilePic.style.transition = 'transform 0.2s';
});
profilePic.addEventListener('mouseout', function() {
  profilePic.style.transform = 'scale(1)';
  profilePic.style.transition = 'transform 0.5s';
});

const toggleSwitch = document.querySelector('#dark-mode-toggle');
toggleSwitch.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

const currentTheme = localStorage.getItem('dark-mode');
if (currentTheme === 'enabled') {
    document.body.classList.add('dark-mode');
    document.documentElement.setAttribute('data-theme', 'dark');
} else {
    document.body.classList.remove('dark-mode');
    document.documentElement.setAttribute('data-theme', 'light');
};

// var img = document.getElementById("picjs");
// img.addEventListener("mouseover", function() {
//   img.classList.add("fade");
//   img.src = "photo2.png";
// });
// img.addEventListener("mouseout", function() {
//   img.classList.remove("fade");
//   img.src = "photo.jpg";
// });
