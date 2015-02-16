
document.addEventListener('click', function(e){
  if (e.target.nodeName == 'A') {
    analytics.track('Click', {
      name: e.target.textContent,
    });
  }
}, true);
