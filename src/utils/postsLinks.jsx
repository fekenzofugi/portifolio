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

            "<pre><code class='language-html line-numbers'>&lt;h1&gt;Articles&lt;/h1&gt;\n&lt;ul&gt;\n  &lt;% @articles.each do |article| %&gt;\n    &lt;li&gt;\n      &lt;%=article.title %&gt\n    &lt;/li&gt;\n  &lt;% end %&gt;\n&lt;ul&gt;</code></pre>" +

            "<p>The above code is a mixture of HTML and ERB. ERB is a templating system taht evaluates Ruby code embedded in a document. Here, we can see two types of ERB tags: &lt;% %&gt; and &lt;%= %&gt;. The first one means 'evaluate the enclosed Ruby code'. The last one means 'evaluate the enclosed Ruby code, and output the value it returns'. Anything you could write in regular Ruby program go inside these ERB tags, though it's usually best to keep the contents of ERB tags short, for readability.  </p>" +

            "<p>If we restart our server, now we'll see the data from our database displayed on http://localhost:3000.</p>" +

            "<p>Let's recap what happens when we visit http://localhost:3000 :</p>" +

            "<ol><li>The browser makes a request to http://localhost:3000.</li><li>Our Rails application receives this request.</li><li>The Rails router maps the root route to the index action of ArticlesController.</li><li>The index action uses the Article model to fetch all articles in the database.</li><li>Rails automatically renders the app/views/articles/index.html.erb view.</li><li>The ERB code in the view is evaluated to output HTML.</li><li>The server sends a response containing the HTML back to the browser.</li></ol>" +

            "<p>We've connected all the MVC design pattern parts together and we have our first controller action. Next, we'll move to the second action.</p>" +

            "<h4>9. CRUD</h4>" +

            "<p>Almost all web applications involve CRUD (Create, Read, Update, Delete) operations. You may even find that the majority of the work you application does is CRUD. Rails acknowledges this, and provides many features to help simplify code doing CRUD. Let's begin exploring these features by adding more functionality to our application</p>" +

            "<h5>9.1 Showing a Single Article</h5>" +

            "<p>We currently have a view that lists all the articles in our database. Let's create  a view that shows the title and body of a single article.</p>" +

            "<p>We start by adding a new route that maps to a new controller action (which we will add next). Open config/routes.rb, and insert the last route shown here.</p>" +
            
            "<pre>Rails.application.routes.draw do\n  root 'artcles#index'\n\n  get '/articles', to: 'articles#index'\n  get '/articles/:id', to: 'articles#show'\nend</pre>" +

            "<p>The new route is another get route, but it has something extra in its path :id. This designates a route parameter. A route parameter captures a segment of the request's path, and puts that value in the params hash, which is accessible by the controller action. For example, when handling a request like GET http://localhost:3000/articles/1, 1 would be captured as the value for :id, which would then be accessible as params[:id] in the show action of ArticlesController.</p>" +

            "<p>Let's add that show action now, below the index action in app/controllers/articles_controller.rb.</p>" +

            "<pre>class ArticlesController < ApplicationController\n  def index\n    @articles = Article.all\n  end\n\n  def show\n    @article = Article.find(params[:id])\n  end\nend</pre>" +

            "<p>The show action calls Article.find with the id captured by the route parameter. The returned article is stored in the @article instance variable, so it is accessible by the view. By default, the show action will render app/views/articles/show.html.erb.</p>" +

            "<p>Let's create app/views/articles/show.html.erb, with the following contents</p>" +

            "<pre>&lt;h1&gt;&lt;%= @article.title %&gt;&lt;/h1&gt;\n\n&lt;p&gt;&lt;%= @article.body %&gt;&lt;/p&gt;</pre>" +

            "<p>Now we can see the article when we visit http://localhost:3000/articles/1.</p>" +

            "<p>To finish up, let's add a convenient way to get to an article's page. We'll link each article's page. We'll link each article's title in app/views/articles/index.html.erb to its page.</p>" +

            "<pre><code class='language-html line-numbers'>&lt;h1&gt;Articles&lt;/h1&gt;\n&lt;ul&gt;\n  &lt;% @articles.each do |article| %&gt;\n    &lt;li&gt;\n      &lt;a href='/articles/ &lt;%= article.id %&gt;'&gt;\n        &lt;%=article.title %&gt\n      &lt/a&gt;\n    &lt;li&gt;\n  &lt;% end %&gt;\n&lt;ul&gt;</code></pre>" +

            "<h5>9.2 Resourceful Routing</h5>" +

            "<p>So far, we've covered the 'R' (Read) of CRUD. We will eventually cover the 'C' (Create), 'U' (Update), and 'D' (Delete). As you might have guessed, we will so do by adding new routes, controller actions and views. Whenever we have such a combination of routes, controller actions, and views that work together to perform CRUD operations on an entity, we call that a entity resource. For example, in our application, we would say an article is a resource.</p>" +

            "<p>Rails provides a routes method named resources that maps all the conventional routes for a collection of resources, such as articles. So before we proceed to the 'C', 'U' and 'D' sections, let's replace the two get routes in config/routes/rb with resources: </p>" +

            "<pre>Rails.application.routes.draw do\n  root 'articles#index'\n  resources :articles\nend</pre>" +

            "<p>We can inspect what routes are mapped by running the bin/rails routes command.</p>" +

            "<p>The resources method also sets up URL and path helper methods that we can use to keep our code from depending on a specific route configuration. The values in the 'prefix' column (in in the table on the command line when we type the bin/rails routes command) plus a suffix of _url or _path forms the names of these helpers. For example, the article_path helper returns /articles/#{article.id} when given an article. We can use it to tidy up our links in app/views/articles/index.html.erb.</p>" +



            "<pre>&lt;h1&gt;Articles&lt;/h1&gt;\n&lt;ul&gt;\n  &lt;% @articles.each do |article| %&gt;\n    &lt;li&gt;\n      &lt;a href='&lt;%= article_path(article) %&gt;'&gt;\n        &lt;%=article.title %&gt\n      &lt/a&gt;\n    &lt;li&gt;\n  &lt;% end %&gt;\n&lt;ul&gt;</pre>" +

            "<p>However, we will take this one step further by using the link_to helper. The link_to helper renders a link with its first argument as the link's text and its second argument as the link's destination, link_to will call the appropriate path helper to convert the object to a path. For example, if we pass an article, link_to will call article_path. So app/views/articles/index.html.erb becomes: </p>" +

            "<pre><code class='language-html line-numbers'>&lt;h1&gt;Articles&lt;/h1&gt;\n&lt;ul&gt;\n  &lt;li&gt;\n    &lt;% @articles.each do |article| %&gt;\n      &lt;%=article.title %&gt    \n    &lt;% end %&gt;\n  &lt;li&gt;\n&lt;ul&gt;</code></pre>" +


            "<h5>9.3 Creating a new article</h5>" +

            "<p>Now we move on to the 'C' (Create) of CRUD. Typically, in web applications, creating a new resource is a multi-step process. First, the user requests a form to fill out. Then, the user submits the form. If there are no errors, then the resource is created and some kind of confiramation is displayed. Else, the form is redisplayed with error messages, and the process is repeated.</p>" +

            "<p>In a Rails application, these steps are conventionally handled by a controller's new and create action. Let's add a typical implementation of these actions to app/controllers/articles_controllers.rb below the show action: </p>" +

            "<pre>class ArticlesController < ApplicationController\n  def index\n    @articles = Article.all\n  end\n\n  def show\n    @article = Article.find(params[:id])\n  end\n\n  def new\n    @article = Article.new\n  end\n\n  def create\n    @article = Article.new(title: '...', body: '...')\n\n    if @article.save\n      redirect_to @article\n    else\n      render :new, status: :unprocessable_entity\n    end\n  end\nend</pre>" +

            "<p>The new action instantiates a new article, but does not save it. This article will be used in the view when building the form. By default, the new action will render app/views/articles/new.html.erb, which we will create next.</p>" +

            "<p>The create action instantiates a new article with values for the title and body, and attempts to save it. If the article is saved successfully, the action redirects the browser to the articles's page at 'http://localhost:3000/articles/#{@article.id}'. Else, the action redisplays the form by rendering app/views/articles/new.html.erb with status code 422 Unprocessable Entity. The title and body here are dummy values. After we create the form, we will come back and change these.</p>" +

            "<p>redirect_to will cause the browser to make a new request, whereas render renders the specified view for the current request. It is important to use redirect_to after mutating the database or application state. Otherwise, if the user refreshes the page, the browser will make the same request, and the mutation will be repeated.</p>" +

            "<h5>9.3.1 Using a Form Builder</h5>" +

            "<p>We will use a feature of Rails called a form builder to create our form. Using a form builder, we can write minimal amount of code to output a form that is fully configured and follows Rails conventions.</p>" +

            "<p>Let's create app/views/articles/new.html.erb with the following contents: </p>" +

            "<pre>&lt;h1&gt;New Article&lt;/h1&gt;\n\n&lt;%= form_with model: @article do |form| %>\n  &lt;div&gt;\n    &lt;%= form.label :title %&gt;&lt;br&gt;\n    &lt;%= form.text_field :title %&gt;\n  &lt;/div&gt;\n\n  &lt;div&gt;\n    &lt;%=form.label :body %&gt;&lt;br&gt;\n    &lt;%= form.text_area :body %&gt;\n  &lt;/div&gt;\n\n  &lt;div&gt;\n    &lt;%= form.submit %&gt;\n  &lt;/div&gt;\n&lt;% end %&gt;</pre>" +

            "<p>The form_with helper method instantiates a form builder. In the form_with block we call methods like label and text_field on the form builder to output the appropriate form elements.</p>" +

            "<p>The returning output from our form_with call will look like: </p>" +

            "<pre>&lt;form action='/articles' accept-charset='UTF-8' method='post'&gt;\n  &lt;input type='hidden' name='authenticity_token' value='...' &gt;\n\n  &lt;div&gt;\n    &lt;label for='article_title'&gt;Title&lt;/label&gt;&lt;br&gt;\n    &lt;input type='text' name='article[title]' id='article_title'&gt;\n  &lt;/div&gt;\n\n  &lt;div&gt;\n    &lt;label for='article_body'&gt;Body&lt;/label&gt;&lt;br&gt;\n    &lt;textarea name='article[body]' id='article_body'&gt;&lt;/textarea&gt;\n  &lt;/div&gt;\n\n  &lt;div&gt;\n    &lt;input type='submit' name='commit' value='Create Article' data-disable-with='Create Article'&gt;\n  &lt;/div&gt;\n&lt;/form&gt;</pre>"+

            "<h5>9.3.2 Using strong parameters</h5>" +

            "<p>Submitted form data is put into the params hash, alongside captured route parameters. Thus, the create action can access the submitted title via params[:article][:title] and the submitted body via params[:article][:body]. We could pass these values individually to Article.new, but that would be verbose and possibly error-prone. And it would become worse as we add more fields.</p>" +

            "<p>Instead, we will pass a single hash that contains the values. However, we must still specify what values are allowed in that Hash. Otherwise, a malicious user could potentially submit extra form fields and overwrite private data. In fact, if we pass the unfiltred params[:article] hash directly to Article.new, Rails will raise a ForbiddenAttributesError to alert us about the problem. So we will use a feature called Strong Parameters to filter params. Think of it as strong typing for params.</p>" +
        
            "<p>Let's add a private method to the bottom of app/controllers/articles_controller.rb named article_params that filters params. And let's change create to use it.</p>" +

            "<pre>class ArticlesController < ApplicationController\n  def index\n    @articles = Article.all\n  end\n\n  def show\n    @article = Article.find(params[:id])\n  end\n\n  def new\n    @article = Article.new\n  end\n\n  def create\n    @article = Article.new(article_params)\n\n    if @article.save\n      redirect_to @article\n    else\n      render :new, status: :unprocessable_entity\n    end\n  end\n\n  private\n    def article_params\n      params.require(:article).permit(:title, :body)\n    end\nend</pre>" +

            "<h5>9.3.3 Validations and Displaying Error messages</h5>" +

            "<p>Creating is a multi-step process. Input validation is another step of it. To deal with that Rails provide a feature called validations. Validaitions are rules that are chacked before a model object is saved. If the new object is invalid the creating will be aborted and appropriate error messages will ge added to the errors attribute of the model object.</p>" +

            "<pre>class Article < ApplicationRecord\n  validates :title, presence: true\n  validates :body, presence: true, length: { minimum: 10 }\nend</pre>" +

            "<p>The first validation declares that a title value must be present. Because title is a string, this means that the title value must contain at least one non-whitespace character.</p>" +

            "<p>The second validation declares that the body value must be present. Additionally, it declares that the body value must be at least 10 characteres long.</p>" +


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