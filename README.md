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

        Data binding is the machanisim of accessing the methoda and fields of a component class
        in the component template.

        Interpolation

            is to embed an expression intot he html-dom

            <tag-name> {{expression}} </tag-name>

            <p> Hello {{userName}} ! How Are You? </p>
            <p> Sum of {{n1}} and {{n2}} is {{n1+n2}} </p>

        Two-Way Data Binding

            is to bind a feidl with a form input element.

            The value of the field is copied to the input-element for the first time.
            And every time the input element is edited, the field gets updated.

            Two-way data bindign can not be doen on any html attribute. Instead we 
            use 'ngModel' - a inbuilt attribute directive from 'FormsModule' from '@angular/forms'

            <input [(ngModel)]="field" />

        One-Way Data Binding

            Attribute Binding
                is to bind a value of a field to a html attribute.

                <tag-name [attribute]="field"> content </tag-name>

                <p title="a sample hint"> This is a test paara </p>

                <p [title]="hint"> This is a test paara </p>

            Event Binding
                is to map a method to an event, so that the mehtod is invoked when that event occurs.

                <tag-name (eventDirective)="method()"> content </tag-name>

                html-event-attribute            event-directive
                ---------------------------------------------------------------------
                onClick                         click
                onDblClick                      dblclick
                onMouseOver                     mouseover
                onMosueLeave                    mouseleave
                onKeyUp                         keyup
                onKeyDown                       keydown
                onChange                        change
                onFocus                         focus
                onBlur                          blur
                onSubmit                        ngSubmit, submit

                <button (click)="method()" type="button"> CLICK ME </button>

            Style Binding

                is used to control the style of an element programatically.

                Using 'style' attribute

                    <element [style.cssProperty]="field" > content </element> 

                    <p [style.backgroundColor]="myBgColor" > a test para </p>

    
                Using 'ngStyle' attribute Directive

                    the field being boudn must be a json object having keys as cssPropertyName and
                    values as value literals or other variable.

                    <element [ngStyle]="field" > content </element> 

                    let myStyle = {backgroundColor:myBgColor;width:10%;color:reverse(myBgColor)};

                    <p [ngStyle]="myStyle" > a test para </p>

                Using class attribute

                    use a boolean field to apply or remove a class on an element

                    <element [class.className1]="field1" [class.className2]="field2" > content </element> 

                Using ngClass attribute directive with an array of css class names

                    <element [ngClass]="anArray" > content </element> 

                Using ngClass attribute directive with an json object of css class names as keys and boolean values

                    <element [ngClass]="jsonObject" > content </element> 

    Angular Flow Controls

        @if( booleanAngularExpression ){
            <p> This para appears if the given expression evaluates to true. </p>
        }             

        @if( booleanAngularExpression ){
            <p> This para appears if the given expression evaluates to true. </p>
        } @else {
            <p> This para appears if the given expression evaluates to false. </p>
        }

        @if( booleanAngularExpression1 ){
            <p> This para appears if the given expression1 evaluates to true. </p>
        } @else if( booleanAngularExpression2 ) {
            <p> This para appears if the given expression2 evaluates to true. </p>
        } @else {
            <p> This para appears if none of the expressions evaluates to true. </p>
        }

        @for(n of numsArray; track $index) {
            <p> this para is repeated once for each {{n}} in the array. </p>
            <p> track taeks an expression that can give a unique value for each iteration </p>
            <p> $count is an built-in variable to give no of iterations so far </p>
            <p> $index is an built-in variable to give index of iteration</p>
            <p> $first is an built-in variable to give true for the first iteration </p>
            <p> $last is an built-in variable to give true for the last iteration </p>
            <p> $even is an built-in variable to give true for all even iterations </p>
            <p> $odd is an built-in variable to give true for all odd iterations </p>
        } @empty {
            <p> this para appers if the given array is empty. </p>
        }

        @switch(expression) {
            @case (value1) {
                <p> This para appears if the expression evaluates to value1 </p>
            }
            @case (value2) {
                <p> This para appears if the expression evaluates to value2 </p>
            }
            @case (value3) {
                <p> This para appears if the expression evaluates to value3 </p>
            }
            @default {
                <p> This para appears if the expression evaluates to none of the given values </p>
            }
        }

    Angular Routing

        Allows us to navigate from one component to another.

        Routing is controlled through RouterModule.

        RouterModule offers

        Routes                  Route[]

        Route                   { path:'', pathMatch:'startsWith|full', component: Component, redirectTo:'', children:[] }

        RouterOutlet            is a built-in component that acts as a place holder for the resultant component of routing.

        RouterLink              is a built-in attribute directive used to hold the target path for a 'a' element instead of its 'href'.

        RouterLinkActive        is a built-in attribute directive used to hold a css class to be applied on to the active 'a' element.
        
        Router                  is a built-in service and offers two method for programatic navigation.
                                navigate(["/sales","/dashboard"]);
                                navigateByUrl("/sales/dashboard");

        ActivatedRoute          is a built-in service sued to extract info like query params, path params ..etc., from the current path.
    
    Angular Directives

        A directive is a angular defined html attribute.

        ng g directive DirectiveName --skip-tests

            @Directive({
                selector:'[attributeName]'
            })
            export class DirectiveNameDirective {

                constructor(private ele:ElementRef){

                }
            }

            <tag attributeName> content </tag>
            <tag attributeName="value"> content </tag>
            <tag [attributeName]="expression"> content </tag>

        Angular Injector can inject a reference to the element on which the directive is applied in the directive constructor
        as an object of ElementRef

        ElementREf from '@angular/common' is a class that represents html elements, the actual javascript object of
        the html element is refered to by the nativeElement property of ElementRef.

        @HostListner()    is used to map any host element event onto a method.

        @Input()          is used to receive a value into the attribute

    Angular Pipes

        {{ expression | pipeName : 'args'}}

        Pipes tranaform the value of a givne expression into something else.

        built-in pipes

            lowercase
            uppercase
            titlecase
            number
            currency
            date
            json
            async

        custom pipe

            ng g pipe PipeName --skip-tests
            
            @Pipe({
                name:'pipeName'
            })
            export class PipeNamePipe implements PipeTranform {

                transform(value:any):any{
                    //trnaform the value into any result
                    return result;
                }
            }


    Angular Services & Dependency Injection

        a service is a class that holds bussiness logic.

        any computation or rest-api calls or other logical or arthimatic caliculations are written inside a service.

        An object of a service is never created but is injected by angular through a constructor of an artifact (Component / Pipe/
        directive or anotehr service)

            ng g service ServiceName --skip-tets

            @Injectable({
                providedIn:'root'
            })
            export class ServiceNameService {

            }

        How many objects of a service are created ?    

            Services are injected by 'injectors'.

            In angular we have three levels of injectors
                (a) root level injector             we will have only one such injector for the entire app

                (b) module level injector           we will have one for each module
                                                    'providers:[]' in the module meta-data is used to activate module level injector

                (c) artifact level injector         we will have on for each artifact  
                                                    'providers:[]' in the artifact meta-data is used to activate artifact level injector

                    @Component({
                        .....,
                        providers:[ServiceName],
                        .....,
                    })
                    export class ComponentName {
                        constructor(private s:ServiceName){ //a new object of the service is created every time the component is loaded.

                        }
                    }

                    @Component({
                        .....,
                        standalone:true
                    })
                    export class ComponentName1 {
                        constructor(private s:ServiceName){ //the root level injector will inject the service object.
                        }
                    }

                    @Component({
                        .....,
                        standalone:true
                    })
                    export class ComponentName2 {
                        constructor(private s:ServiceName){ //the root level injector will inject the service object same as Component1
                        }
                    }

    Models using TypeScript Interfaces

        in typescript interfaces are used to create models.

            ng g interface Employee

            export interface Employee {
                
            }

        typescript interface can accomidate public data memebrs and public abstract methods

            export interface Employee {
                id:number;
                fullName:string;
                dateOfJoining:Date;
                salary:number;                
            }

        how do we crate an object to an interface

            let emp:Employee = {id:1,fullName:"Vamsy",dateOfJoining:new Date(),salary:900000};

    Angular Modules

        a module is a logical group of components, pipes and directives.

        an artifact (Components or a directive or a pipe) that does not belong to
        any module is called a standalone artifact.

            ng g module ModuleName

            @NgModule({
                declarations:[ /* list of all components,pipes and directive to be grouped under this module */ ],
                exports:[ /*list of all components,pipes and directive of this module that are allowed to be imported outside*/ ],
                imports:[ /*list of other moduels to be imported into this module */ ],
                providers:[ /*list of services to be provided by this module level injector*/ ]
            })
            export class ModuleNameModule {

            }

        To add an artifact into a module while creating the artifact

            ng g c sales/DashboardComponent -m sales.module --skip-tests --standalone=false
            ng g directive sales/FastMovingStock -m sales.module --skip-tests --standalone=false
            ng g pipe sales/CostInWords -m sales.module --skip-tests --standalone=false
            
    Integrating Bootstrap

        npm i bootstrap

        add the following into angular.json "styles" and "scripts" sections
            node_modules/bootstrap/dist/css/bootstrap.min.css
            node_modules/bootstrap/dist/js/bootstrap.min.js

    Lazy Loading

        allows us to load a feature module / sub-module as and when requested
        by a router.

        the module will be laxy loaded along with its module level routes.

    Template Driven Forms vs Model Driven Forms (Reactive Forms)

        Template Driven Forms define the dom, structure and validations in the 
        template itself, and are hard to test. 
            
            FormsModule from '@angular/forms'
                ngForm
                ngModel

        These forms are recommeded only in a senario having not more then one or two controls.

        Reactive Forms otherwise called model driven forms are structured and validation
        logic is provided by a model in the controller class. Only
        its dom is defiend in the template file.

            ReactiveForms from '@angular/forms'
                FormGroup
                FormControl
                formControlName

        These forms are recommemded to handle 90% of all form requirments in an angualr app.
        These forms are easier to test.

    Rest API Calls using HttpClient

        HttpClient from HttpClientModule from '@angular/common/http'.

        to enable HttpClient service injection:
            (a) importProvidersFrom(httpClientModule) in app.config

            (or)

            (b) provideHttpClient() in app.config

        HttpClient
            get(url) : Observable
            post(url,reqBody) : Observable
            put(url,reqBody) : Observable
            delete(url) : Observable

        Observable from 'rxjs' allows us to ahndle the asynchronous rest-api call.

        let ob = httpClient.get(url);

        ob.subscribe({
            next: result => { /*handle the result of the request */ },
            error: err => { /*handle the error */ }
        })

    Create a fake rest-api using json-server

        json-server is a javascript library that generates rest-api from a .json file

        md rest-api
        cd rest-api
        npm init -y
        npm i json-server@0.17.4

        create a rest-api/data.json that shall contain the hypothetical data

        in package.json, we create a script
            "start":"json-server --port 9999 --watch ./data.json"

        npm start

    