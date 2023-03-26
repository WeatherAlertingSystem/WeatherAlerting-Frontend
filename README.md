# WeatherAlertingFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## CI/CD Pipeline
This repository utilizes CI/CD pipeline via Github Actions.
Everytime there is a pull request or push to master branch, a `Test, build and deploy` job runs.
The job automaticaly builds & deploys the app into the Amazon S3 bucket (if the bucket exists).

## Manual build and deploy to S3

To build the application, run
```bash
ng build-prod
```
A `./dist/project_name` directory will be generated.

To manually deploy application into Amazon S3 Bucket run:
```bash
aws s3 sync ./dist/project_name/ s3://bucket_name
```
The files created by build job will be copied to the bucket.
Make sure that the bucket has `Static website hosting` enabled.


## Local development

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
