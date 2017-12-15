# Beeline Frontend Testing

### Frontend testing framework
Beeline currently has two levels of frontend testing:
1. Basic continuous monitoring on Pingdom every 10 minutes - *simple tests verifying that the user arrives at the correct page/URL when specific tabs are clicked*
2. More detailed tests using Protractor - *these tests need to be run on a computer with a browser*

### How to run Protractor tests

#### Clone repo into local directory
Clone the data.gov.sg/beeline-frontend-testing repo into a local directory. The repo contains two files required for the Protractor frontend tests for Beeline: conf.js and spec.js.

#### Install Protractor pre-requisites
Install npm
```
npm install
```
Install Java development kit (JDK)
```
brew update
brew tap caskroom/cask
brew install Caskroom/cask/java
```
#### Install Protractor
Install Protractor and Selenium webdriver manager
```
npm install -g protractor
webdriver-manager update
webdriver-manager start
```
#### Running Protractor
Run protractor in command line
```
protractor conf.js
```
The results of the tests will be displayed in the command line.

