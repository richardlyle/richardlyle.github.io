# Richard Lyle Personal Portfolio Website

## 🎯 Project Goal

The goal of this project was to create a personal portfolio website for Second Lieutenant Richard Lyle that showcases his background, interests, and accomplishments using modern web development tools.

This site serves as a professional hub where visitors can:

- 📜 Read a detailed biography  
- 🏒 Explore personal interests via an interactive drag-and-drop quiz  
- 📷 Browse a photo gallery with carousel and masonry layout  
- 📬 Get in touch via a contact form  
- 📄 View a resume styled to match the official PDF version  

## 📌 Note

This project was developed as part of a master's course in Web Application Design and incorporates multiple bonus features such as:

- TypeScript integration  
- HTML5 API usage (Drag and Drop)  
- Responsive layout without external frameworks  

## Features

### 🏠 Home Page
- Greets visitors with a vertical headshot and a short overview of what the site offers.
- Serves as the landing page for first impressions.

### 👤 Biography
- Structured narrative about my upbringing, education, hockey achievements, and military service.
- Inline images appear between sections to keep the content visual and engaging.

### 🎯 Interests (Interactive Quiz)
- **HTML5 Drag and Drop API** is used to create an interactive quiz.
- Users drag 12 tiles into one of 3 buckets: "Places I Have Lived", "Sports I Like", or "Food I Like".
- A **Check Answers** button returns incorrectly placed tiles and gives a score out of 12.
- Personalized result messages based on score.
- Only correct tiles stay in the bucket to encourage learning through retrying.
- Most effort went into refining logic, UI/UX, and feedback mechanisms.

### 📄 Resume
- Page styled to **closely resemble my official PDF resume**.
- Clean section layout: Profile summary, Work Experience, Education, and Skills.
- Header and date formatting match the PDF layout exactly for a professional appearance.

### 🖼️ Gallery
- Sectioned gallery built using `react-photo-gallery` and `react-images`.
- Categories include: Hockey, Friends & Family, Travel.
- **Fullscreen modal slideshow** allows image navigation.
- A **video section** is also included to showcase highlights, ensuring it's styled responsively.

### 📬 Contact
- Simple and clean contact form for visitors to reach out.
- Input validation included.
- Form layout is consistent with the design of the rest of the site.

---

## Technologies Used

- **React** with `react-router-dom` for navigation
- **TypeScript** for type safety and scalable code
- **CSS** (no frameworks) for responsive layout and styling
- **HTML5 APIs**: Drag and Drop (Interests page)
- **react-photo-gallery**, **react-images** for image layout and modal
- **Responsive Design** using CSS Grid and Flexbox

---