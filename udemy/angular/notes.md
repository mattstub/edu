# Angular 5

## Components
- Whole application in angular is built by a collection of components
- Makes the program completely modular
- Each component has its own template, business logic, and possibly styling
- Split applications into reusable parts
- Makes the program really easy to update and exchange
- The `AppComponent` is the root component
- Generally speaking each component should have its own folder
- Naming convention would be like `server.component.ts`
- A component is a typescript class
- Add decorators to help Angular identify components
- By default you must declare all of your components, angular does not parse the entire project
- Base building block of any angular app

## Databinding
- Communication between your business code and the html
- Different forms of communication
    - **Output Data**
    - String Interpolation: `{{ data }}`
    - Property Binding: `[property]="data"`
    - **React to Events**
    - Event Binding: `(event)="expression"`
    - **Combination of Both**
    - Two-Way-Binding: `[(ngModel)]="data"`

## Directives
- Instructions in the DOM
- Selectors in components are somewhat of a directive with a template to back up
- Directives do not have to be tied to templates
- Structural directives require a * in place, i.e. `*ngif=""`

## Property Event Binding
- Can bind to properties and events of standard HTML elements
- Can bind to custom properties and events of directives
- Can also bind to custom properties and events of components
