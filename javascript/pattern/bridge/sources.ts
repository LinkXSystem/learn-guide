/**
 * @description 桥接模式
 */

interface Theme {
  getColor: Function;
}

class DarkTheme implements Theme {
  getColor() {
    return 'Dark Theme';
  }
}

class LightColor implements Theme {
  getColor() {
    return 'Light Theme';
  }
}

abstract class WebPage {
  theme: Theme;

  constructor(theme: Theme) {
    this.theme = theme;
  }

  getContent: Function;
}

class HomePage implements WebPage {
  getContent() {
    console.log('About page in ', this.theme.getColor());
  }
}

(function() {
  const dark = new DarkTheme();

  const page = new HomePage(dark);

  page.getContent();
});
