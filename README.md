Angular 17
-------------------------------------------------------------

    Introduction

        1. is a TypeScript based SPA framework.

            Single Page Application     -   is a bu=ndle of one single html page with a lot of JavaScript code, and
                                            the JS is going to handle all the processing on the client itself.

        2. Angular makes html extendable.

        3. Angular advocates on MVC archetecture

            Component Class acts as the Controller
            Component Template acts as the View
            TypeScript interfaces and class for modeling the domain objects.

        4. Evolution
                Angular JS          is java script based

                Angular2            is type script based
                Angular4
                ......
                Angular17

    Angular Application Archetecture    

        An angular application is very well strucutred witha variety of artifacts.

        1. Each artifact is a typescript class.
        2. Each class is marked with a decorator to identify its role.
        3. Each decorator is given a json-object which encapsualtes the config., of an artifact. and that json-obj is called meta-data.

        Modules
        Directives
        Components
        Pipes
        Services

    Angular CLI

        Is a frontier of scripts that has macros of regular project structure and life cycle related operations.

        ng new app-name         Creates a fodler witht he app-name
                                Will creates a sample standard project structure
                                And installs all the needed angular libraries (packages) into the application.

        cd app-name

            ng serve                    transpells .ts into .js, and the generated bundle is hosted on a development server @ 4200
            ng serve --port 9999 -o     transpells .ts into .js, and the generated bundle is hosted on a development server @ 9999
                                        -o is to auto-launch the web app on a browser

            ng build                    transpells .ts into .js, and the generated bundle is written into 'dist' folder.

            ng test                     transpells .ts into .js, and is going to trigger test cases on the generated bundle.

    Lab Setup

        NodeJS 18 or above          node --version      http://nodejs.org
        Angular CLI                 ng version          npm i -g @angular/cli
        VSCode  IDE


    Angular Components

        Angular offers html extendability. We can develop our own html-elements and attribute.

        An angular component is a custom developed html element.

        ng g component ComponentName
        ng g c ComponentName
        ng g c ComponentName --skip-tests      

        ng g c Dashboard --skip-tests

            dashboard.component.ts          the component class file            Controller, handles
                                                                                    state and events
                @Component({
                    selector:'app-dashboard',            the tag-name of the component
                    templateUrl:'dashboard.component.html',
                    stylesheets:['dashboard.component.css'],
                    imports:[],
                    providers:[]
                })
                export class Dashboard {

                }
            
            dashboard.component.html        the component template              View, the html-dom
            
            dashboard.component.css         the component style sheet

            <app-dashboard></app-dashboard>

    Angular Styling

        styles.css      serves as global style sheet
        component.css   serves as component level local style sheet.

    Angular Data Binding

        Data binding is the machanisim of accessing the methoda nd fields of a component class
        in the component template.

        Interpolation
        Two-Way Data Binding
        One-Way Data Binding