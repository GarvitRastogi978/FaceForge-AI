/* =============================
   BLOG RENDERING SYSTEM
============================= */

function renderBlogs(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  if (!data || data.length === 0) {
    container.innerHTML = "<p>No matching prompts found 😢</p>";
    return;
  }

  data.forEach(blog => {
    container.innerHTML += `
      <div class="card">
        <img src="${blog.image}" alt="blog image">
        <div class="card-content">
          <small>${blog.date}</small>
          <h3>${blog.title}</h3>
          <a href="${blog.file}" class="btn btn-outline">Read Article</a>
        </div>
      </div>
    `;
  });
}


/* =============================
   INITIAL LOAD
============================= */

document.addEventListener("DOMContentLoaded", () => {
  // Home page latest blogs (3)
  if (document.getElementById("homeBlogs")) {
    renderBlogs("homeBlogs", blogs.slice(0, 3));
  }

  // Blog page full list
  if (document.getElementById("blogList")) {
    renderBlogs("blogList", blogs);
  }

  // Enable prompt copy buttons
  addCopyButtons();

  // Enable live search
  setupLiveSearch();
});


/* =============================
   🔍 LIVE SEARCH
============================= */

function setupLiveSearch() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    const filtered = blogs.filter(blog =>
      blog.title.toLowerCase().includes(value) ||
      blog.date.toLowerCase().includes(value)
    );

    renderBlogs("blogList", filtered);
  });
}


/* =============================
   📋 PROMPT COPY BUTTONS
============================= */

function addCopyButtons() {
  const prompts = document.querySelectorAll(".prompt-box");

  prompts.forEach(box => {
    // Skip if already processed
    if (box.dataset.processed) return;
    box.dataset.processed = "true";

    const btn = document.createElement("button");
    btn.innerText = "Copy Prompt";
    btn.classList.add("copy-btn");

    btn.addEventListener("click", () => {
      const text = box.innerText.trim();

      navigator.clipboard.writeText(text).then(() => {
        btn.innerText = "Copied!";
        btn.classList.add("copied");

        setTimeout(() => {
          btn.innerText = "Copy Prompt";
          btn.classList.remove("copied");
        }, 2000);
      });
    });

    // Insert button AFTER the prompt box
    box.insertAdjacentElement("afterend", btn);
  });
}


/* =============================
   ⬆️ BACK TO TOP BUTTON
============================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

if (topBtn) {
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
