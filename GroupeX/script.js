<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GroupeX</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        
        h1 {
            color: #333;
            text-align: center;
            margin-bottom: 30px;
        }
        
        .paragraph {
            background-color: white;
            padding: 20px;
            margin: 15px 0;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .paragraph:hover {
            background-color: #e3f2fd;
            transform: translateX(10px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        
        #display {
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            color: #1976d2;
            margin-top: 30px;
            min-height: 30px;
        }
    </style>
</head>
<body>
    <h1>GroupeX</h1>
    
    <div class="paragraph" data-name="Sevan">
        <strong>Sevan</strong> - DI25.
    </div>
    
    <div class="paragraph" data-name="Baptiste">
        <strong>Baptiste</strong> - DI25.
    </div>
    
    <div class="paragraph" data-name="Omar">
        <strong>Omar</strong> - DI25.
    </div>
    
    <div class="paragraph" data-name="Basile">
        <strong>Basile</strong> - DI25.
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