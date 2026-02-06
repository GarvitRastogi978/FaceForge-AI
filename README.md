# 🎨 FaceForge AI  
### AI Art, Portraits & Viral Prompt Blog Platform

FaceForge AI is a modern, responsive, multi-page blog website focused on **AI image prompts, portrait techniques, and viral digital art workflows**.  
Built using pure **HTML, CSS, and JavaScript**, designed to scale into a full AI creator platform.

---

## 🚀 Live Website
🔗 [https://garvitrastogi.github.io/faceforge-ai](https://garvitrastogi978.github.io/FaceForge-AI/)

---

## ✨ Features

- 📰 Dynamic blog system powered by JavaScript  
- 📁 Separate `/blogs` folder for scalable content  
- 🔍 Live search for blog posts  
- 📋 One-click AI prompt copy buttons  
- 🎨 Modern AI gradient UI  
- 📱 Fully responsive design  
- 📬 Working contact form (Web3Forms integration)  
- 🔒 Privacy Policy & Terms pages  
- 🧠 Built as a mini CMS using static files  

---

## 🧩 Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure |
| CSS3 | Styling & layout |
| JavaScript | Dynamic blog rendering & search |
| Web3Forms | Contact form backend |
| GitHub Pages | Hosting |

---

## 📂 Project Structure

```
FaceForge-AI/
│
├── index.html
├── blog.html
├── about.html
├── contact.html
├── privacy-policy.html
├── terms-of-use.html
├── thank-you.html
│
├── blogs/ # Individual blog posts
│
├── css/
│ └── style.css
│
├── js/
│ ├── main.js # Blog engine + search + copy buttons
│ └── blog-data.js # Blog metadata
│
└── assets/images/
```


---

## 🧠 How the Blog System Works

All blog posts are written as individual HTML files inside `/blogs`.

To add a new post:

1. Create a new file in `/blogs`
2. Add prompt sections using:

```html
<div class="prompt-box">
Your AI prompt here...
</div>
```

---

## 🧠 Add the blog metadata inside blog-data.js

```
{
  title: "Your Blog Title",
  date: "June 2026",
  image: "assets/images/yourimage.jpg",
  file: "blogs/your-post.html"
}
```
The site updates automatically.

---

## 📬 Contact Form Setup
This project uses Web3Forms:
```
<form action="https://api.web3forms.com/submit" method="POST">
```
No backend required.

---

## 🔮 Future Improvements

- Tag filtering system
- Prompt difficulty levels
- Newsletter integration
- Dark mode toggle
- Prompt library section

---

## 📜 License
```
This project is open for learning and inspiration.
All content and branding belong to FaceForge AI.
```

---
