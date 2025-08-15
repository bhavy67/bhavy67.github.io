# Personal Portfolio Website

A fully responsive, modern personal portfolio website built with HTML, CSS, and JavaScript. Features a dark theme by default with light mode toggle, smooth animations, and a clean professional design.

## 🚀 Features

- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Animated skill bars, hover effects, and smooth scrolling
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading, lazy loading images, optimized animations
- **Accessibility**: Keyboard navigation, ARIA labels, semantic HTML
- **SEO Friendly**: Proper meta tags, structured data, semantic markup

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles and themes
├── js/
│   └── script.js          # Interactive functionality
├── images/
│   ├── project1.jpg       # Project screenshots
│   ├── project2.jpg
│   ├── project3.jpg
│   └── README.md
├── resume/
│   ├── my_resume.pdf      # Your resume file
│   └── README.md
└── README.md              # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup, accessibility features
- **CSS3**: Modern CSS features, CSS Grid, Flexbox, custom properties
- **JavaScript (ES6+)**: Modern JavaScript, no external dependencies
- **Font Awesome**: Icons
- **Google Fonts**: Inter and JetBrains Mono fonts

## 🎨 Design Features

### Color Palette
- **Primary**: Purple (#6c5ce7)
- **Secondary**: Cyan (#00d2d3)
- **Accent**: Pink (#fd79a8)
- **Background**: Deep navy (#0f0f23)
- **Text**: White/Light gray

### Typography
- **Primary Font**: Inter (clean, modern sans-serif)
- **Monospace**: JetBrains Mono (for code snippets)

### Animations
- Smooth page transitions
- Hover effects on interactive elements
- Scroll-triggered animations
- Typing effect for hero subtitle
- Floating code card animation

## 📋 Setup Instructions

1. **Clone or download** this project
2. **Replace placeholder content** with your information:
   - Update personal information in `index.html`
   - Add your project images to `images/` folder
   - Add your resume PDF to `resume/` folder
   - Update social media links
3. **Customize colors** (optional):
   - Modify CSS custom properties in `style.css`
   - Update color scheme to match your brand
4. **Deploy**:
   - Upload to any web hosting service
   - Works with GitHub Pages, Netlify, Vercel, etc.

## ✏️ Customization Guide

### Personal Information
Update these sections in `index.html`:
- Name in hero section
- Professional title
- About me description
- Experience timeline
- Education details
- Skills list
- Project information
- Contact details
- Social media links

### Styling
Modify CSS custom properties in `style.css`:
```css
:root {
  --primary-color: #6c5ce7;    /* Change primary color */
  --secondary-color: #00d2d3;  /* Change secondary color */
  --accent-color: #fd79a8;     /* Change accent color */
  /* ... other variables */
}
```

### Adding Projects
To add more projects:
1. Add project image to `images/` folder
2. Copy project card HTML structure
3. Update project details
4. Add to CSS if needed

### Contact Form
The contact form includes:
- Client-side validation
- Visual feedback
- Success/error notifications
- Loading states

**Note**: To make the form functional, you'll need to:
- Replace the `simulateFormSubmission()` function
- Add a backend endpoint or service (EmailJS, Formspree, etc.)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Responsiveness

- Mobile-first design approach
- Breakpoints: 480px, 768px, 1024px
- Touch-friendly interface
- Optimized navigation for small screens

## ⚡ Performance Features

- Optimized CSS and JavaScript
- Lazy loading for images
- Minimal external dependencies
- Efficient animations using CSS transforms
- Debounced scroll events

## 🔧 Development

To make changes:
1. Edit HTML structure in `index.html`
2. Modify styles in `css/style.css`
3. Add functionality in `js/script.js`
4. Test on different devices and browsers

### CSS Organization
The CSS is organized into sections:
- CSS Custom Properties (variables)
- Reset & Base Styles
- Utility Classes
- Component Styles (navigation, hero, etc.)
- Responsive Media Queries

### JavaScript Modules
The JavaScript is organized into functions:
- Theme toggle
- Mobile menu
- Smooth scrolling
- Form validation
- Scroll animations
- Performance optimizations

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find bugs or have suggestions for improvements, please open an issue.

## 📞 Support

If you need help customizing this portfolio:
- Check the comments in the code
- Review the README files in each folder
- Search for similar issues in web development communities

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to repository Settings > Pages
3. Select source branch
4. Access your site at `username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository
2. Set build command: (none needed)
3. Set publish directory: `/`
4. Deploy

### Vercel
1. Import your GitHub repository
2. No configuration needed
3. Deploy

---

**Made with ❤️ and modern web technologies**

Remember to:
- ⭐ Star this repository if you found it helpful
- 🍴 Fork it to create your own version
- 📢 Share it with others who might need a portfolio template
