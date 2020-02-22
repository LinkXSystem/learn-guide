### 命名风格
- 文件命名： *.directive.ts

### 基本使用
> 编写 directive.ts 
```
import { Directive, HostBinding} from '@angular/core';

@Directive({
    selector: '[greet]'
})
export class GreetDirective {
  @HostBinding() innerText = 'Hello, Everyone!';
}
```

> 配置
```
@NgModule({
  declarations: [
    AppComponent,
    GreetDirective
  ],
  //...
})
```

> 使用
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Hello, Angular</h2>
    <h2 greet>Hello, Angular</h2>
  `,
})
export class AppComponent { }
```

### 定义属性
> 定义
```
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[greet]'
})
export class GreetDirective {
    @Input() greet: string;
    @HostBinding() get innerText() {
        return this.greet;
    }
}
```

> 使用
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Hello, Angular</h2>
    <!-- greet="color" -->
    <h2 [greet]="'Hello, Semlinker!'">Hello, Angular</h2>
  `,
})
export class AppComponent { }
```

### 事件处理
> 点击事件
```
@HostListener('click',['$event']) 
onClick(event) {
  this.greet = 'Clicked!';
}
```

> 鼠标事件
```
@HostListener('mouseenter') onMouseEnter() {
  this.greet = 'Clicked!';
}

@HostListener('mouseleave') onMouseLeave() {
  this.greet = 'Clicked!';
}
```

### 处理属性
> 操控属性
```
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
}
```

> 获取属性
```
import { Directive, HostBinding, HostListener, Input, Attribute } from '@angular/core';

@Directive({
    selector: '[greet]'
})
export class GreetDirective {
    @Input() greet: string;

    @HostBinding() get innerText() {
        return this.greet;
    }

    @HostListener('click',['$event']) 
    onClick(event) {
        this.greet = 'Clicked!';
        console.dir(event);
    }

    constructor(@Attribute('author') public author: string) {
        console.log(author);
    }
}
```

### <ng-template> 指令
> <ng-template> 指令简介
- <ng-template>是一个 Angular 元素，用来渲染HTML。 它永远不会直接显示出来。 事实上，在渲染视图之前，Angular 会把<ng-template>及其内容替换为一个注释。

> 代码
```
import { Component, TemplateRef, ViewContainerRef, ViewChild, 
  AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ng-template #tpl>
      Hello, Semlinker!
    </ng-template>
  `,
})
export class AppComponent implements AfterViewInit{
  @ViewChild('tpl')
  tplRef: TemplateRef<any>;

  constructor(private vcRef: ViewContainerRef) {}

  ngAfterViewInit() {
    this.vcRef.createEmbeddedView(this.tplRef);
  }
}
```

### <ngTemplateOutlet> 指令
>  <ngTemplateOutlet> 指令简介
- 该指令用于基于已有的 TemplateRef 对象，插入对应的内嵌视图。在应用 NgTemplateOutlet 指令时，我们可以通过 [ngTemplateOutletContext] 属性来设置 EmbeddedViewRef 的上下文对象。绑定的上下文应该是一个对象，此外可通过 let语法来声明绑定上下文对象属性名。

> 基本使用
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ng-template #stpl>
      Hello, Semlinker!
    </ng-template>
    <ng-template #atpl>
      Hello, Angular!
    </ng-template>
    <div [ngTemplateOutlet]="atpl"></div>
    <div [ngTemplateOutlet]="stpl"></div>
  `,
})
export class AppComponent { }
```

> let 语法
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ng-template #stpl let-message="message">
      <p>{{message}}</p>
    </ng-template>
    <ng-template #atpl let-msg="message">
      <p>{{msg}}</p>
    </ng-template>
    <ng-template #otpl let-msg>
      <p>{{msg}}</p>
    </ng-template>
    <div [ngTemplateOutlet]="atpl"
      [ngOutletContext]="context">
    </div>
    <div [ngTemplateOutlet]="stpl"
      [ngOutletContext]="context">
    </div>
    <div [ngTemplateOutlet]="otpl"
      [ngOutletContext]="context">
    </div>
  `,
})
export class AppComponent {
  context = { message: 'Hello ngOutletContext!', 
    $implicit: 'Hello, Semlinker!' };
}
```

### 创建结构指令
> 代码
```
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[exeUnless]'
})
export class UnlessDirective {

    @Input('exeUnless')
    set condition(newCondition: boolean) {
        if (!newCondition) { 
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }

    constructor(private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef) {
    }
}
```

> 使用
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <h2 *exeUnless="condition">Hello, Semlinker!</h2> 
  `,
})
export class AppComponent {
  condition: boolean = false;
}
```