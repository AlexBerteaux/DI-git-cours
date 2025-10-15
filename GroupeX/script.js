<script>
    const paragraphs = document.querySelectorAll('.paragraph');
    const display = document.getElementById('display');
        
    paragraphs.forEach(p => {
        p.addEventListener('mouseover', function() {
            display.textContent = id;
        });
            
        p.addEventListener('mouseleave', function() {
            display.textContent = '';
        });
    });
</script>
