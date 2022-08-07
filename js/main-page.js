(function() {
    const BUBBLES_COUNT = 10;

    function bubblesGenerator() {
        const bubbleEl = document.getElementById('main-bubble');
        const bubblesArr = [];
        // const pageWidth = document.body.getBoundingClientRect().width;
        // const pageHeight = document.body.getBoundingClientRect().height;

        for (let i = 0; i < BUBBLES_COUNT; i++) {
            const newBubble = bubbleEl.cloneNode();
            newBubble.id = `bubble-${i}`;
            newBubble.style.left = `${(Math.floor(Math.random() * 100))}%`;
            newBubble.style.top = `${(Math.floor(Math.random() * 100))}%`;
            const newSize = `${30 + (Math.floor(Math.random() * 100))}px`
            newBubble.style.height = newSize;
            newBubble.style.width = newSize;
            newBubble.style.display = 'block';
            newBubble.addEventListener('click', (event) => {
                // newBubble.style.left = `${(Math.floor(Math.random() * 100))}%`;
                // newBubble.style.top = `${(Math.floor(Math.random() * 100))}%`;
              const popBubble =  newBubble.animate(
                [
                    { transform: 'scale(0, 0)' },
                    { transform: 'scale(120%, 120%);'}],
                    {
                        duration: 100,
                        iterations: 1
                    }
                );
                popBubble.onfinish = () => {
                    newBubble.style.display = 'none'
                };
            });
            bubblesArr.push(newBubble);
        }
        document.body.append(...bubblesArr);
    }

    // bubblesGenerator();

}())
