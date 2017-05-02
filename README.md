#REPORT

This document is a report for the work I have done during developing the CrossPlay web app.

##INDEX
1. Introduction
2. Installation
3. Run
4. Test
5. Documentation

##INTRODUCTION

This app was build to meet the requirements of the app described in the Assignment.pdf file you find in the archive.

CrossPlay is a Angular2 app, that relies on the following (main) dependencies:

- bootstrap 3.3.7 (for responsiveness)
- ReactJS 5.1.0 (for events handling)
- ngx-rating 0.0.9 (for the rating funcionality)
- karma 1.4.1 (for Unit Tests)

##INSTALLATION

The installation require npm packet manager.
Follow these steps to install the app:

cd assignment
npm uninstall -g @angular/cli angular-cli
npm cache clean
npm install -g @angular/cli@latest
npm install
ng build
cp -R ./dist/* /path/to/node/backend/client

##RUN

cd /path/to/node/backend
npm start

open a browser and navigate to localhost:3000 (login:ali, password: password)

##TEST

The application has been corredated by a stack of 13 Unit Tests, one for each component/service of the app.
Follow these steps to test the app

cd assignment
ng test

##DOCUMENTATION

CrossPlay has a single Module: the AppModule. This module contains
- 4 Services (Base,User,Video and Event -service)
- 7 Components (App, Login, VideoList, Video, Detail, Navigator and Notification -component)
- 1 Directive (ScrollTrackerDirective)
- 1 Guard (LoginGuard)
- 1 model (Video)
