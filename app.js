const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  // Get current date and time
const now = new Date();
const dateTime = now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  // HTML page content
const message = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CI/CD Pipeline Demo</title>
    <style>
    body {
        background: linear-gradient(135deg, #1e3c72, #2a5298);
        color: #ffffff;
        font-family: 'Segoe UI', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0;
        text-align: center;
    }
    h1 {
        color: #ffde59;
        font-size: 2.5rem;
        margin-bottom: 10px;
    }
    h2 {
        color: #e0f7fa;
        font-weight: normal;
        margin-bottom: 20px;
    }
    p {
        font-size: 1.1rem;
        line-height: 1.5;
        max-width: 600px;
    }
    .datetime {
        font-size: 1rem;
        color: #f2f2f2;
        background: rgba(0, 0, 0, 0.3);
        padding: 10px 15px;
        border-radius: 10px;
        margin-top: 15px;
        display: inline-block;
    }
    footer {
        margin-top: 30px;
        font-size: 0.9rem;
        color: #ccc;
    }
    .container {
        background: rgba(255, 255, 255, 0.1);
        padding: 30px 40px;
        border-radius: 20px;
        box-shadow: 0 0 20px rgba(0,0,0,0.3);
    }
    </style>
</head>
<body>
    <div class="container">
    <h1> CI/CD Pipeline Project</h1>
    <h2>GitHub Actions + Docker Integration</h2>
    <p>
        Welcome! This Node.js application is running inside a Docker container.<br>
        Each time you push code to GitHub, GitHub Actions automatically builds and deploys your Docker image.
    </p>
    <p>
        This demonstrates how Continuous Integration and Continuous Deployment (CI/CD) works in real-time.
    </p>
    <div class="datetime">🕒 Current Date & Time: <b>${dateTime}</b></div>
    <footer>
        Made with VS code by <b> Dass Ramesh</b><br>
        © ${new Date().getFullYear()} | All rights reserved
    </footer>
    </div>
</body>
</html>
`;

res.writeHead(200, { 'Content-Type': 'text/html' });
res.end(message);
});

server.listen(port, () => console.log(`✅ Server running at http://localhost:${port}`));
