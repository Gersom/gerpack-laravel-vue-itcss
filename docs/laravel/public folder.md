# Laravel 5.4

> Change name and location of public folder

* #### __Step 1__:

  Edit these 2 lines in `public/index.php` to the following:

  ```php
  <?php
    require __DIR__.'/../laravel/bootstrap/autoload.php';
    $app = require_once __DIR__.'/../laravel/bootstrap/app.php';
  ```



* #### __Step 2__:

  Created `app/MyApp.php` with the content that sid405 wrote:

  ```php
  <?php
    namespace App;

    use Illuminate\Foundation\Application;

    class MyApp extends Application  
    {
        public function publicPath()  
        {
            return $this->basePath.DIRECTORY_SEPARATOR.'..'.DIRECTORY_SEPARATOR.'public';
        }
    }
  ```



* #### __Step 3__:

  In `bootstrap/app.php` commented out the default application and replace it with:

  ```php
  <?php
    // $app = new Illuminate\Foundation\Application(
    //  realpath(__DIR__.'/../')
    // );

    $app = new App\MyApp(
        realpath(__DIR__.'/../')
    );
  ```



* #### __Step 4__:

  Add in `app/Providers/AppServiceProvider.php`

  ```php
  <?php

    public function register()
    {
        // new
        $this->app->bind('path.public', function() {
            return base_path().'/../public';
        });
    }
  ```



* #### __Step 5__:

  Update in `server.php`

  ```php
  <?php

    if ($uri !== '/' && file_exists(__DIR__.'/../public'.$uri)) {
        return false;
    }

    require_once __DIR__.'/../public/index.php';
  ```
