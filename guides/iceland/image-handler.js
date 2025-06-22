document.addEventListener('DOMContentLoaded', function() {
    // Create modal container
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    document.body.appendChild(modal);

    // Initialize Intersection Observer for lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const container = img.parentElement;
                
                // Add loading state
                container.classList.add('loading');
                
                // Load the actual image
                img.src = img.dataset.src;
                
                // Handle image load complete
                img.onload = () => {
                    container.classList.remove('loading');
                    observer.unobserve(img);
                };
                
                // Handle image load error
                img.onerror = () => {
                    container.classList.remove('loading');
                    container.classList.add('error');
                    observer.unobserve(img);
                };
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.1
    });

    // Process all images in the document
    function processImages() {
        const images = document.querySelectorAll('img[src]:not(.processed)');
        
        images.forEach(img => {
            // Skip if already processed
            if (img.classList.contains('processed')) return;
            
            // Create container for the image
            const container = document.createElement('div');
            container.className = 'image-container';
            img.parentNode.insertBefore(container, img);
            container.appendChild(img);
            
            // Set up lazy loading
            img.dataset.src = img.src;
            img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; // Transparent placeholder
            img.classList.add('processed');
            
            // Observe the image
            imageObserver.observe(img);
            
            // Add double click handler
            container.addEventListener('dblclick', () => {
                const modalImg = document.createElement('img');
                modalImg.src = img.dataset.src || img.src;
                modal.innerHTML = '';
                modal.appendChild(modalImg);
                modal.classList.add('active');
            });
        });
    }

    // Handle modal close
    modal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Initial processing
    processImages();

    // Process new images that might be added dynamically
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                processImages();
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}); 