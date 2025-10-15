<!DOCTYPE html>
</head>
<body>
    <h1>GroupeX</h1>
    
    <div class="paragraph" data-name="Basile">
        <strong>Basile</strong> - DI25.
    </div>
    
    <div class="paragraph" data-name="Omar">
        <strong>Omar</strong> - DI25.
    </div>
    
    <div class="paragraph" data-name="Sevan">
        <strong>Sevan</strong> - DI25.
    </div>
    
    <div class="paragraph" data-name="Baptiste">
        <strong>Baptiste</strong> - DI25.
    </div>
    
    <div id="display"></div>
    
    <script>
        const paragraphs = document.querySelectorAll('.paragraph');
        const display = document.getElementById('display');
        
        paragraphs.forEach(p => {
            p.addEventListener('mouseenter', function() {
                const name = this.getAttribute('data-name');
                display.textContent = name;
            });
            
            p.addEventListener('mouseleave', function() {
                display.textContent = '';
            });
        });
    </script>
</body>
</html>