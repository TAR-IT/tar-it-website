document.addEventListener('DOMContentLoaded', function() {
  const emailIcon = document.getElementById('email-icon');
  const githubIcon = document.getElementById('github-icon');
  const linkedinIcon = document.getElementById('linkedin-icon');

  emailIcon.addEventListener('click', function() {
      window.location.href = 'mailto:info@tar-it.com';
  });

  githubIcon.addEventListener('click', function() {
      window.location.href = 'https://github.com/TAR-IT';
  });

  linkedinIcon.addEventListener('click', function() {
      window.location.href = 'https://www.linkedin.com/in/tobiasachimrau';
  });
});