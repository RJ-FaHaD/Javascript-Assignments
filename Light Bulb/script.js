document.getElementById('onButton').addEventListener('click', function() {
    document.getElementById('lightOn').classList.remove('hidden');
    document.getElementById('lightOff').classList.add('hidden');
    document.body.style.backgroundColor = 'yellow';
  });
  
  document.getElementById('offButton').addEventListener('click', function() {
    document.getElementById('lightOff').classList.remove('hidden');
    document.getElementById('lightOn').classList.add('hidden');
    document.body.style.backgroundColor = 'white';
  });
  