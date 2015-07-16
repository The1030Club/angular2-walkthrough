/// <reference path="typings/angular2/angular2.d.ts" />

// The import statement defines the modules we want to use to write our code.
// Here we’re importing three things: Component, View, and bootstrap.
// We’re importing it from "angular2/angular2". The "angular2/angular2"
// portion tells our program where to find the dependencies that we’re looking for.

import {
    Component,
    View,
    bootstrap,
} from "angular2/angular2";

// When we create a new Component we define a new HTML <tag></tag>. A component is
// derived of three parts :
    // 1. Component annotation
    // 2. View annotation
    // 3. A definition class

// 1. Component Annotation : "We want to be able to use this component in our
// markup by using a <hello-world> tag. To do that we configure the Component
// and specify the selector as hello-world. We’re simply defining a new tag."

@Component({
    selector: 'hello-world'
})

// 2. View Annotation : "Similar to @Component, the @View annotation indicates
// that HelloWorld also has a View. This View defines an HTML template that
// will be rendered when this component is rendered." Basically when you use
// the component in the HTML, the view produces a template and spits it into
// the HTML.

@View({
    template: `<div>Hello world</div>`
})
class HelloWorld {
}

bootstrap(HelloWorld);