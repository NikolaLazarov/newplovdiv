# Пловдив - Технологична дестинация | Plovdiv - Technology Destination

## Описание | Description

Този уебсайт е дизайниран като модерна версия на портала за Пловдив, използвайки същия шаблон като [Българския кадастрален портал](https://kais.cadastre.bg/), но с дизайн и цветове, вдъхновени от [Пловдивските инвестиционни материали](https://invest.plovdiv.bg/).

This website is designed as a modern version of the Plovdiv portal, using the same template as the [Bulgarian Cadastre Portal](https://kais.cadastre.bg/), but with design and colors inspired by the [Plovdiv Investment Materials](https://invest.plovdiv.bg/).

## Особености | Features

### 🎨 Дизайн | Design
- **Същият шаблон като Българския кадастрален портал** | Same template as Bulgarian Cadastre Portal
- **Модерен, отзивчив дизайн** | Modern, responsive design
- **Цветова схема вдъхновена от Пловдивските материали** | Color scheme inspired by Plovdiv materials
- **Градиенти и сенки за модерен вид** | Gradients and shadows for modern look

### 🚀 Функционалност | Functionality
- **Отзивчив дизайн за всички устройства** | Responsive design for all devices
- **Интерактивни елементи** | Interactive elements
- **Анимации и преходи** | Animations and transitions
- **Мобилно меню** | Mobile menu
- **Търсачка** | Search functionality
- **Контроли за размер на текста** | Text size controls

### 📱 Структура | Structure
1. **Горна лента** | Top Header Bar
   - Доступност | Accessibility
   - Контроли за размер на текста | Text size controls
   - Търсачка | Search
   - Избор на език | Language selector

2. **Основна навигация** | Main Navigation
   - Лого и информация | Logo and information
   - Навигационни линкове | Navigation links
   - Потребителски действия | User actions

3. **Главна секция** | Hero Section
   - Заглавие и подзаглавие | Title and subtitle
   - Call-to-action бутон | Call-to-action button

4. **Карти с услуги** | Service Cards
   - Инвестиции | Investments
   - Кадастрални справки | Cadastral references
   - Технологичен парк | Technology park
   - Образователни институции | Educational institutions

5. **Новини** | News
   - Последни новини | Latest news
   - Интерактивни елементи | Interactive elements

6. **Статистики** | Statistics
   - Анимирани броячи | Animated counters
   - Визуално представяне | Visual presentation

## Технологии | Technologies

- **HTML5** - Семантична структура | Semantic structure
- **CSS3** - Модерни стилове и анимации | Modern styles and animations
- **JavaScript (ES6+)** - Интерактивност | Interactivity
- **Font Awesome** - Икони | Icons
- **Google Fonts** - Типографика | Typography

## Цветова схема | Color Scheme

### Основни цветове | Primary Colors
- **Синьо** | Blue: `#1e3a8a`, `#1e40af`, `#3b82f6`
- **Жълто** | Yellow: `#fbbf24`, `#f59e0b`
- **Зелено** | Green: `#10b981`, `#059669`
- **Лилаво** | Purple: `#8b5cf6`, `#7c3aed`

### Неутрални цветове | Neutral Colors
- **Бяло** | White: `#ffffff`
- **Сиво** | Gray: `#6b7280`, `#9ca3af`
- **Тъмно** | Dark: `#1f2937`, `#374151`

## Инсталация | Installation

1. **Клонирайте проекта** | Clone the project
   ```bash
   git clone [repository-url]
   cd plovdiv-website
   ```

2. **Отворете файла** | Open the file
   - Отворете `index.html` в уеб браузър | Open `index.html` in a web browser
   - Или стартирайте локален сървър | Or start a local server

3. **За локален сървър** | For local server
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve .
   
   # PHP
   php -S localhost:8000
   ```

## Използване | Usage

### 🎯 Основни функции | Main Functions
- **Навигация** | Navigation: Използвайте горните линкове | Use the top navigation links
- **Търсене** | Search: Въведете текст в търсачката | Enter text in the search box
- **Услуги** | Services: Кликнете на картите за услуги | Click on service cards
- **Статус** | Status: Проверете статус на заявления | Check application status

### 📱 Мобилно използване | Mobile Usage
- **Мобилно меню** | Mobile menu: Кликнете на иконата за меню | Click the menu icon
- **Отзивчив дизайн** | Responsive design: Автоматично се адаптира | Automatically adapts
- **Touch-friendly** | Оптимизирано за докосване | Touch-optimized

### ♿ Доступност | Accessibility
- **Контроли за размер на текста** | Text size controls: A-, A, A+
- **Висок контраст** | High contrast: Ясни цветове | Clear colors
- **Семантична структура** | Semantic structure: Правилно използване на HTML | Proper HTML usage

## Структура на файловете | File Structure

```
plovdiv-website/
├── index.html          # Основен HTML файл | Main HTML file
├── styles.css          # CSS стилове | CSS styles
├── script.js           # JavaScript функционалност | JavaScript functionality
└── README.md           # Документация | Documentation
```

## Персонализация | Customization

### 🎨 Промяна на цветовете | Changing Colors
Редактирайте CSS променливите в `styles.css`:
Edit CSS variables in `styles.css`:

```css
:root {
    --primary-blue: #1e3a8a;
    --primary-yellow: #fbbf24;
    --accent-green: #10b981;
}
```

### 📝 Промяна на съдържанието | Changing Content
Редактирайте текста в `index.html`:
Edit text in `index.html`:

```html
<h1 class="hero-title">Вашето заглавие | Your Title</h1>
<p class="hero-subtitle">Вашето описание | Your Description</p>
```

### 🔧 Добавяне на нови функции | Adding New Features
Разширете `script.js` с нови функционалности:
Extend `script.js` with new functionalities:

```javascript
// Нова функция | New function
function newFeature() {
    console.log('Нова функционалност | New functionality');
}
```

## Поддръжка | Support

### 🐛 Известни проблеми | Known Issues
- Няма | None currently

### 🔄 Бъдещи подобрения | Future Improvements
- [ ] Многоезична поддръжка | Multi-language support
- [ ] Интеграция с база данни | Database integration
- [ ] API за динамично съдържание | API for dynamic content
- [ ] PWA функционалност | PWA functionality

## Лиценз | License

Този проект е създаден за демонстрационни цели.
This project is created for demonstration purposes.

## Автор | Author

Създадено с ❤️ за Пловдив
Created with ❤️ for Plovdiv

---

**Забележка** | **Note**: Този уебсайт е демонстрационен и не е свързан с официалните институции на Пловдив.
This website is demonstrational and is not affiliated with official Plovdiv institutions.
