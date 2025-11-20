document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const counterDisplay = document.getElementById('counter');
    const resetButton = document.getElementById('reset-btn');
    const MAX_CHARS = 100;
    const WARNING_YELLOW = 20;

    const updateCounter = () => {
        const currentLength = textInput.value.length;
        const remaining = MAX_CHARS - currentLength;
        counterDisplay.textContent = remaining;

        counterDisplay.classList.remove('counter-green', 'counter-yellow', 'counter-red');
        
        if (remaining > WARNING_YELLOW) {
            counterDisplay.classList.add('counter-green');
        } else if (remaining > 0) {
            counterDisplay.classList.add('counter-yellow');
        } else {
            counterDisplay.classList.add('counter-red');
        }
    };

    const handleInput = (e) => {
        if (textInput.value.length > MAX_CHARS) {
            textInput.value = textInput.value.substring(0, MAX_CHARS);
        }
        updateCounter();
    };

    const handleKeyDown = (e) => {
        if (textInput.value.length >= MAX_CHARS && e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
            e.preventDefault();
        }
    };

    const reset = () => {
        textInput.value = '';
        updateCounter();
        textInput.focus();
    };

    textInput.addEventListener('input', handleInput);
    
    textInput.addEventListener('keydown', handleKeyDown);

    resetButton.addEventListener('click', reset);

    updateCounter();
});