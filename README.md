# task-manager
Task Manager

# GUI
Initial setup for Angular GUI


## Install yarn
```dotnetcli
npm install -g yarn
```
## Install Angular
```dotnetcli
yarn global add @angular/cli 
ng version
## Alternative in  case of error
npm install -g @angular/cli
```
## Configure the CLI to use Yarn Package Manager
```dotnetcli
ng set --global packageManager=yarn
ng config --global cli.packageManager yarn
```
## set up a new angular cli project for GUI
```dotnetcli
ng new gui
```
## Run an angular app
```dotnetcli
cd gui

ng serve
```

