let count = 0;
    let history = [];

    const counterElement = document.getElementById('counter');
    const evenOddElement = document.getElementById('even-odd');
    const historyElement = document.getElementById('history');

    function updateCounter() {
      counterElement.textContent = count;
      evenOddElement.textContent = count % 2 === 0 ? 'Even' : 'Odd';
      counterElement.style.color = count % 2 === 0 ? 'green' : 'red';
    }

    function updateHistory() {
      historyElement.textContent = 'History: ' + history.join(', ');
    }

    function increment() {
      count++;
      history.push(count);
      updateCounter();
      updateHistory();
      animateCounter();
    }

    function decrement() {
      if (count > 0) {
        count--;
        history.push(count);
        updateCounter();
        updateHistory();
        animateCounter();
      }
    }

    function reset() {
      count = 0;
      history = [];
      updateCounter();
      updateHistory();
    }

    function animateCounter() {
      counterElement.classList.add('animate-counter');
      setTimeout(() => {
        counterElement.classList.remove('animate-counter');
      }, 300);
    }