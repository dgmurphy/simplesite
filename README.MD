# Simple Site
Barebones example of site that accepts text input, sends a query, and displays the result. The query uses the Poemist API.

## Setup for Running Local Apache

Clone this repo.

### Install and Configure Apache

On Ubuntu:

    sudo apt update
    sudo apt install apache2


Confirm Apache is running by viewing the default page:

    http://localhost:80

Edit the default site configuration file:

    cd /etc/apache2/sites-available
    sudo vim 000-default.conf

Change the DocumentRoot but use your own project path:

    DocumentRoot /home/dmurphy/dev/teach/simplesite

After the DocumentRoot line add this Directory configuration but
use your own project path:

    <Directory "/home/dmurphy/dev/teach/simplesite">
        Options Indexes FollowSymLinks Includes ExecCGI
        AllowOverride All
        Order allow,deny
        Allow from all
        Require all granted
    </Directory>

Save and exit.

Restart apache:

    sudo service apache2 restart

Reload the site:
    
    http://localhost:80

Simple Site should be visible now.

### Debug in VSCode Using Chrome

The Chrome extension for VSCode will let you set breakpoints in
your javascript.

https://github.com/microsoft/vscode-chrome-debug


### Note About Apache
Installing apache will make it launch every time you start Ubuntu.
This will tie up your HTTP port (80).

To stop apache from automatically starting:

    sudo systemctl disable apache2
    sudo systemctl stop apache2



