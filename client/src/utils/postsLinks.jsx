import postimg from "../assets/images/ruby.png";

const links = [
    {
        count: 1,
        title: "Welcome!",
        subHeader:"First post on the blog!",
        tags:["first post"] ,
        date: "27/01/2024",
        postBody: 
        
            "<p>As you guys can see this is my first blog post, here i'll be sharing my journey to becoming the best programmer i can be, i'll post here the technologies i'm currently learning, projects and much more.</p>" +


            "<p></p>",
        img: "https://www.devopsschool.com/blog/wp-content/uploads/2022/03/eb9e3b7dab09358e7cf13f188f64f9f4.png"
    },
    {
        count: 2,
        title: "Ruby Programming Language Basic Syntax",
        subHeader:"First Day learning ruby.",
        tags:["ruby", "programming language"] ,
        date: "25/01/2024",
        postBody: 
        
            "<p>Today i've started learning the Ruby programming language. The main motivation it's to build a good foundation and use properly the Ruby on Rails framework that transformed the way the web works and learn how to make proper web applications.</p>" +

            "<p>To learn the language i'll be using the book 'Programming Ruby 3.2: The Pragmatic Programmers Guide' by Dave Thomas, Chad Fowler, Andy Hunt.</p>" +

            "<h4>A pure object oriented language<h4/>" +

            "<p>An object is a thing that has data associated and functionality to manipulate that data. A language is object oriented if it has contructors methods to build these objects.</p>" +

            "<p>The biggest difference between Ruby and other programming languages such as Java, C# and Python is that all Ruby types are objects and there are no non-object types that behave differently.</p>" +

            "<p>The basic conecept of object oriented programming is a class that is a blueprint of a real world model. In Ruby you initialize an object using an special method called constructor that has a different syntax compared to Java and C#. The standard constructor in Ruby is called new.</p>" +

            "<pre>object1 = Class.new(arguments)</pre>" +

            "<p>Each object is derived by the same class but can have different data and an unique identifier that can be returned via the property object_id. Furthermore, for each object you can define instance variables - only available inside the scope of the object - and instance methods.</p>" +

            "<pre>object.method(something)</pre>" +

            "<p>The moment we call an instance method, a message is being sent to the object that message have the method's name and any arguments it expect, after that as a response the object - if the particular method is found - will involke the method. This concept was inherited from the SmallTalk programming language.</p>" +
            
            "<p>In Ruby you don't have static methods - functionality that belongs to a class - the methods needs to be called through an object. That's Ruby is called a pure object-oriented language because it doens't have basic types.</p>" +

            "<h4>Ruby Basic Syntax</h4>" +

            "<p>To continue exploring more advanced concepts inside Ruby, we need to know some basic syntax and conventions.</p>" +

            "<pre>#function syntax<br>def say_hello(name)<br>  result = 'hello ' + name <br>  return result<br>end<br><br>#call method<br>puts say_hello()</pre>" +

            "<p>One important thing to have in mind is that Ruby functions does not require the parenthesis unless they are directly needed for the interpreter. To avoid misunderstanding you can use in all situations parenthesis. Often we'll see functions with one parameter being called with no parenthesis.</p>" +

            "<p>There's a difference between strings inside single quotes and double quotes, using double quotes you Ruby allows you to break a line with the backslash n symbol and and using expression interpolation where you add a #{EXPRESSION} inside the string.</p>" +

            "<p>Variables and methods name conventions: </p>" +

            "<ul><li>Local Variable: name variable_underscore</li><li>Instance Variable: @name @variable_name</li><li>Class Variable: @@name @@variable_name</li><li>Global Variable $variable_name</li><li>Class Name: MyClass</li><li>Constant Name: CONSTANT_NAME</li></ul>" +

            "<h4>Arrays and Hashes</h4>" +

            "<p>Array is a data structure, it's a linear list of objects where we retrieve them via their index. In Ruby an array can have elements with different data types.The array initialization syntax is very simple we use the assignment operator followed by square brackets (array literal).</p>" +

            "<pre>array = [element1, element2]</pre>" +

            "<p>A hash is a data structure where the data is organized in the format key : value, the data is retrived by calling the keywords.</p>" +

            "<pre>hash = { \n  'key' => 'value'\n }</pre>" +

            "<h4>Symbols</h4>" +

            "<p>Symbols in Ruby are special strings that are immutable.</p>" +

            "<pre>:variable_name</pre>" +

            "<h4>Control Structures</h4>" +

            "<pre>if condition\n  logic\nelsif condition\n  logic\nelse\n  logic\nend</pre>" +

            "<pre>while (condition)\n  logic\nend</pre>" +

            "<h4>Regular Expressions</h4>" +

            "<p>A regular expression is a way to specify a pattern of characters to be matched in a string. It's a powerful tool when we're working with text.</p>" +

            "<pre>line = gets\nif line.match?(/Ruby|Rust)\n  logic\nend</pre>" +

            "<h4>Blocks</h4>" +

            "<p>A block is a chunck of code that can be passed to a method. There're two ways to initialize a block. The first one is between curly braces and the other is bewtween a do end statement. You should use curly braces when you're passing a single line block and the between the do and end statement when you're passing a multiline block.</p>" +

            "<p>You can control how many times you want a block to be executed within a method with the yield statement. Furthermore, you can pass arguments in a block if the yield statement expects parameters</p>" +

            "<pre>def call_block\n  logic\n  yield('parameter1', 'parameter2')\n  yield('parameter1', 'parameter2')\nend\ncall_block { |name1, name2| puts name1 + name2}</pre>" +

            "<p>In Ruby you can iterate through a collection, this action is called enumeration.</p>" +

            "<pre>animals = ['ant', 'bee', 'cat', 'dog']\nanimals.each {|animal| puts animal}}</pre>" +

            "<p>You can iterate within a range of values and define the times you want to execute the block</p>" +

            "<pre>animals = ['ant', 'bee', 'cat', 'dog']\n5.times {puts '*'}\n3.upto(6) {|i| print i}</pre>" +

            "<h4>Reading and Writing</h4>" +

            "<p>To read content on the console we use the method gets -get string- and to write content we use the method print or puts.</p>" +

            "",
        img: "https://www.devopsschool.com/blog/wp-content/uploads/2022/03/eb9e3b7dab09358e7cf13f188f64f9f4.png"
    },
    {
        count: 3,
        title: "Getting started with rails",
        subHeader:"First look at the framework Ruby on Rails",
        tags:["ruby", "programming language"] ,
        date: "29/01/2024",
        postBody: 
        
            "<p>Now we're going to start learning Ruby on Rails following the starting guide from the oficial website of Rails.</p>" +

            "<h4>1. What is Ruby on Rails?</h4>" +

            "<p>Ruby on Rails it's a web application development framework written in the Ruby programming language. Experienced programmers often report that Rails make web development more fun.</p>" +

            "<h4>2. Ruby on Rails History</h4>" +

            "<p>The Ruby on Rails journey starts back in</p>" +

            "<h4>3. Rails principles</h4>" +

            "<ul><li>DRY: The Don't Repeat Yourself principle stands for it self</li><li>Convention over Configuration: Rails defines it's own default configurations</li></ul>" +

            "<h4>4. Creating a new rails project</h4>" +

            "<p>To create a rails project first you need to install the Ruby, Rails and sqlite3.</p>" +

            "<p>After the installation is completed, we generate a new project. Rails comes with a number of scripts called generators that are designed to make your development life easier by creating everything that's necessary to start working on a particular task. The generators will provide the foundation of a Rails application so you don't need to create yourself.</p>" +

            "<pre>$ rails new blog</pre>" +

            "<p>This command will create a directory called blog that contains different files and folders that make up the structure of a Rails application. In the table down below there's a table explaining each folder and file, the folder path has a / after.</p>" +
            
            "<table><tr><th>File/Folder</th><th>Purpose</th></tr><tr><td>app/</td><td>Contains the controllers, models, views, helpers, mailers, channels, jobs, and assets for your application.</td></tr><tr><td>bin/</td><td>Contains the rails script that starts your app and can contain other scripts you use to set up, create, deploy, or run your application.</td></tr><tr><td>config/</td><td>Contains configuration for your application's routes, database, and more.</td></tr><tr><td>config.ru</td><td>Rack configuration for Rack-based servers used to start the application.</td></tr><tr><td>db/</td><td>Contains your current database schema, as well as the database migrations.</td></tr><tr><td>Dockerfile</td><td>Configuration file for Docker.</td></tr><tr><td>Gemfile GEmfile.lock</td><td>These files allow you to specify what gem dependencies are needed for your Rails application. These files are used by the Bundler gem.</td></tr><tr><td>lib/</td><td>Extended modules for your application.</td></tr><tr><td>log/</td><td>Application log files.</td></tr><tr><td>public/</td><td>Contains static files and compiled asssets. When your app is running, this directory will be exposed as-is.</td></tr><tr><td>Rakefile</td><td>This file locates and loads tasks that can be run from the command line. The task definitions are defined throughout the componenents of Rails. Rather than changing Rakefile, you should add your own task sby adding files to the lib/tasks directory or your application.</td></tr><tr><td>README.md</td><td>This is a brief instruction manual for your application. You should edit this file to tell others what your application does, how to set it up, and so on.</td></tr><tr><td>storage/</td><td>Active Storage files for Disk Service.</td></tr><tr><td>test/</td><td>Unit tests, fixtures, and other test apparatus.</td></tr><tr><td>tmp/</td><td>Temporary files (like cache and pid files).</td></tr><tr><td>vendor/</td><td>A place for all third-party code. In a typical Rails application this includes vendored gems.</td></tr><tr><td>.dockerignore</td><td>This tells Docker which files it should not copy into the container.</td></tr><tr><td>.gitattributes</td><td>This file defines metadata for specific paths in a git repository. This metadata can be used by git and other tools to enhance their behavior. </td></tr><tr><td>.gitignore</td><td>This file tells git which files (or patterns) it should ignore.</td></tr><tr><td>.ruby-version</td><td>This file contains the default Ruby version.</td></tr></table>" +

            "<p>This table was taken from the original framework website <a target=_blanc href='https://guides.rubyonrails.org/getting_started.html'> click here to see more</a>.</p>" +

            "<h4>5. Hello World</h4>" +
            
            "<h5>5.1 Web server</h5>" +

            "<p>First we need to start a web server localy on our machine. Type the following command inside blog directory.</p>" +

            "<pre>$ bin/rails server</pre>" +

            "<p>This command will start up <a target=_blanc href='https://puma.io/'>Puma</a>, a web server distributed with Rails by default. To see your application in action, open a browser window and navigate to http://localhost:3000, you'll see the initial Rails page.</p>" +

            "<h5>5.2 Hello World</h5>" +

            "<p>To say 'Hello World' using Rails you need to create at minimun a route, a controller with an action and a view. A route maps a request to a controller action. A controller action performs the necessary work to handle the request, and prepares any data for the view. A view displays data in a derired format.</p>" +

            "<p>In terms of implementation: Routes are rules written in a Ruby DSL (Domain-Specific-Language). Controllers are Ruby classes, and their public methods are actions. And views are templates, usually written in a mixture of HTML and Ruby.</p>" +

            "<p>Let's start by adding a route to our routes file, config/routes.rb, at the top of the Rails.application.routes.draw block: </p>" +

            '<pre>Rails.application.routes.draw do\n  get "/articles", to: "articles#index"\nend</pre>' +

            "<p>The route above declares that GET / articles request are mapped to the index action of ArticlesController.</p>" +

            "<p>To create ArticlesController and its index action, we'll run the controller generator (with the --skip-routes option because because we already have an appropriate route):</p>" +

            "<pre>$ bin/rails generate controller Articles index --skip-routes</pre>" +

            "<p>Rails will create several files for you.</p>" +

            "<p>The most important of these is the controller file: app/controllers/ articles_controller.rb: </p>" +

            "<pre>class ArticlesController < ApplicationController\n  def index\n  end\nend</pre>" +

            "<p>The index action is empty. When an action does not explicitly render a view (or otherwise trigger an HTTP response), Rails will automatically render a view that matches the name of the controller and action. Convention over Configuration! Views are located in the app/views directory. So the index action will render app/views/articles/index.html.erb by default. </p>" +

            "<p>Let's open app/views/articles/index.html.erb and replace its contents with an h1 tag with hello rails inside it. </p>" +

            "<p>Now if we restart the server typing bin/rails server and visit http://localhost:3000/articles we'll see the text displayed.</p>" +

            "<p>Gathering everything together, first we added the articles route that are mapped to the index action of ArticlesController. Then we create the ArticlesController and it's index action, we need to remember a important thing about Rails it's that automaticaly if not specified the index method will render a view with the same as the controller and the action in that case it's articles, so the index action will render the articles view (and html file).</p>" +

            "<h4>6. Setting the application home page</h4>" +

            "<p>Until now we have in our home route the standart Rails logo. Let's display the 'hello world' text in our home route. To do it we will add a route that maps the root path of our application to the appropriate controller and action.</p>" +

            "<p>Let's open config/routes.rb and add the following root route to the top of the Rails.application.routes.draw block: </p>" +

            "<pre>Rails.application.routes.draw do\n  root 'artcles#index'\n  get '/articles', to: 'articles#index'\nend</pre>" +

            "<h4>7. Autoloading</h4>" +

            "<p>The ArticlesController class inherits the ApplicationController, but the first one does not require explicitly the superclass. Application classes and modules are available everywhere in the project, you do not need and should not load anything under app with require. This feature is called autoloading.</p>" +

            "<h4>8. MVC Design pattern</h4>" +

            "<p>MVC (Model-View-Controller) is a design pattern that divide the responsabilities of an application. MVC is the design pattern that Ruby follows by convention.</p>" +

            "<p>Let's create a model.</p>" +

            "<h5>8.1 Generating a Model</h5>" +

            "<p>A model is a Ruby class that is used to represent data. Adding to it, models can interact with the application's database through a feature of Rails called Active Record. To define a model, we will use the model generator: </p>" +

            "<pre>$ bin/rails generate model Article title:string body:text</pre>" +

            "<p>This command will generate multiple files, we'll focus on db/migrate/<timestamp>_create_articles.rb and the model file app/models/article.rb</p>" +

            "<h5>8.2 Database migrations</h5>" +

            "<p>Migrations are used to alter the structure of an application's database. In Rails applications, migrations are written in ruby so that they can be database-agnostic.</p>" +

            "<p>Inside our migrations file we have: </p>" +

            "<pre>class CreateArticles < ActiveRecord::Migration[7.1]\n  def change\n    create_table : articles do |t|\n      t.string :title\n      t.text :body\n\n      t.timestamps\n    end\n  end\nend</pre>" +

            "<p>create_table specifies how the articles table should be constructed. By default, the create_table method adds an id column as an auto-incrementing primary key.</p>" +

            "<p>Inside the create_table block, two columns are defined: title and body. These were added by the generator because we included them in our generate command.</p>" +

            "<p>On the last line of the block is a call to t.timestamps. This method defines two additional columns named created_at and updated_at. As we will see, Rails will manage these for us, setting the values when we create or update a model object.</p>" +

            "<p>To run our migration we type the following command: </p>" +
            
            "<pre>$ bin/rails dg:migrate</pre>" +

            "<p>We use the model to interact with the table.</p>" +

            "<h5>8.3 Using a model to iteract with the database</h5>" +

            "<p>To play with our model, we're going to use a feature of Rails called console. The console is an interact coding environment just like irb, but it also automatically loads Rails and our application code.</p>" +
            
            "<p>IRB stands for 'interactive ruby' and is at tool to interactively execute Ruby expressions read from the standart input.</p>" +

            "<p>Launch the console with the following command: </p>" +

            "<pre>$ bin/rails console</pre>" +

            "<p>At the console prompt, we can initialize a new Article object: </p>" +

            "<pre>irb> article = Article.new(title: 'Hello Rails', body: 'I am on Rails!')</pre>" +

            "<p>It's important to note that we have only initialized this object. This object is not saved to the database at all. It's only available in the console at the moment. To save the object to the database, we must call save: </p>" +

            "<pre>irb> article.save</pre>" +

            "<p>As a response we'll see printed INSERT INTO 'articles' this means that the object was created at the table.</p>" +
            
            "<p>if we type in the prompt article we'll see printed the object data.</p>" +

            "<p>Notice that id, created_at and updated_at object attributes were created.</p>" +

            "<p>We can fetch this object from the database using the find method passing the id number as a argument.</p>" +

            "<pre>irb>Article.find(1)</pre>" +

            "<p>Adding to it, we can fetch all the articles from the database using the all method.</p>" +

            "<pre>irb>Article.all</pre>" +

            "<p>This method returns an ActiveRecord::Relation object, which you can think of as a superpowered array.</p>" +

            "<p>Models are the final piece of the MVC puzzle. Next, we will connect all of the pieces together.</p>" +

            "<h5>8.4 Showing a list of articles</h5>" +

            "<p>Back in the controller in app/controllers/articles_controller.rb, let's change the index action to fetch all articles from the database: </p>" +

            "<pre>class ArticlesController < ApplicationController\n  def index\n    @articles = Article.all\n  end\nend</pre>" +

            "<p>Controller instance variables can be accessed by the view. That means we can reference @articles in app/views/articles/index.html.erb. Let's open that file and change it's content.</p>" +

            "<pre><code class='language-html line-numbers'>&lt;h1&gt;Articles&lt;/h1&gt;\n&lt;ul&gt;\n  &lt;% @articles.each do |article| %&gt;\n    &lt;%=article.title %&gt\n  &lt;% end %&gt;\n&lt;ul&gt;</code></pre>" +

            "<p>The above code is a mixture of HTML and ERB. ERB is a templating system taht evaluates Ruby code embedded in a document. Here, we can see two types of ERB tags: &lt;% %&gt; and &lt;%= %&gt;. The first one means 'evaluate the enclosed Ruby code'. The last one means 'evaluate the enclosed Ruby code, and output the value it returns'. Anything you could write in regular Ruby program go inside these ERB tags, though it's usually best to keep the contents of ERB tags short, for readability.  </p>" +

            "<p>If we restart our server, now we'll see the data from our database displayed on http://localhost:3000.</p>" +

            "<p>Let's recap what happens when we visit http://localhost:3000 :</p>" +

            "<ol><li>The browser makes a request to http://localhost:3000.</li><li>Our Rails application receives this request.</li><li>The Rails router maps the root route to the index action of ArticlesController.</li><li>The index action uses the Article model to fetch all articles in the database.</li><li>Rails automatically renders the app/views/articles/index.html.erb view.</li><li>The ERB code in the view is evaluated to output HTML.</li><li>The server sends a response containing the HTML back to the browser.</li></ol>" +

            "<p>We've connected all the MVC design pattern parts together and we have our first controller action. Next, we'll move to the second action.</p>" +

            "<h4>CRUD</h4>" +

            "<p> </p>" +

            "<p></p>",
        img: "https://www.devopsschool.com/blog/wp-content/uploads/2022/03/eb9e3b7dab09358e7cf13f188f64f9f4.png"
    },
    // {
    //     count: 4,
    //     title: "",
    //     subHeader:"",
    //     tags:["ruby", "programming language"] ,
    //     date: "",
    //     postBody: 
        
    //         "<p></p>" +


    //         "<p></p>",
    //     img: "https://www.devopsschool.com/blog/wp-content/uploads/2022/03/eb9e3b7dab09358e7cf13f188f64f9f4.png"
    // },
    // {
    //     count: 5,
    //     title: "",
    //     subHeader:"",
    //     tags:["ruby", "programming language"] ,
    //     date: "",
    //     postBody: 
        
    //         "<p></p>" +


    //         "<p></p>",
    //     img: "https://www.devopsschool.com/blog/wp-content/uploads/2022/03/eb9e3b7dab09358e7cf13f188f64f9f4.png"
    // }
];

export default links;