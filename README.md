# Ruru's Japan Travel Blog

This is a personal blog focused on Japan travel, featuring blog posts, a photo gallery, and a contact form. The blog supports both English and Traditional Chinese languages.

## Features

- **Responsive Design:** Basic styling for readability on various devices.
- **Japan Travel Theme:** Content and styling tailored for a Japan travel blog.
- **Photo Gallery:** Displays images from the `gallery_images` directory in a 4-column grid layout.
- **Contact Form:** A simple form for visitors to get in touch.
- **Multi-language Support:** Supports English and Traditional Chinese with language preference saved in local storage.
- **Project Sections:** Three dedicated project pages (`景點足跡`, `飽腹推薦`, `旅記影音集`) with their own content and language switching capabilities.

## Project Structure

```
ruru/
├── index.html
├── project_one.html
├── project_two.html
├── project_three.html
├── script.js
└── gallery_images/
    ├── IMG_028046.JPG
    ├── IMG_028058.JPG
    ├── IMG_028061.JPG
    ├── IMG_028080.JPG
    ├── IMG_028087.JPG
    ├── IMG_028091.JPG
    ├── IMG_028095.JPG
    ├── IMG_028116.JPG
    ├── IMG_028117.JPG
    ├── IMG_028123.JPG
    ├── IMG_028125.JPG
    └── IMG_028131.JPG
```

## Setup and Usage

To view this project, simply open any of the `.html` files in your web browser:

- `index.html`: The main blog page.
- `project_one.html`: 景點足跡 project page.
- `project_two.html`: 飽腹推薦 project page.
- `project_three.html`: 旅記影音集 project page.

### Language Switching

The blog supports English and Traditional Chinese. Your language preference will be saved in your browser's local storage.

- Click on **"繁體中文"** in the navigation bar to switch to Traditional Chinese.
- Click on **"English"** in the navigation bar to switch to English.

### Adding New Blog Posts or Gallery Images

- **Blog Posts:** To add new blog posts, you will need to manually edit `index.html` and add new `<div class="post">` blocks with your content.
- **Gallery Images:** To add more images to the gallery, place your `.JPG` files into the `gallery_images/` directory. You will then need to manually edit `index.html` to add new `<img src="gallery_images/your_image.JPG" alt="Gallery Image">` tags within the `<div class="gallery">` section.

## Development Notes

- **JavaScript:** All language switching logic and other interactive functionalities are handled by `script.js`.
- **CSS:** Styling is embedded directly within each HTML file for simplicity. For larger projects, it's recommended to externalize CSS into a separate `.css` file.
- **Translations:** The `translations` object in `script.js` contains all the translatable strings. To add more translatable content, update this object and ensure corresponding `id` attributes are added to the HTML elements.

## Contributing

Feel free to fork this repository and make your own modifications. If you have suggestions or improvements, please open an issue or submit a pull request.