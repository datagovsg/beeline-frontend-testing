# Beeline Frontend Testing

### Frontend testing framework
Beeline currently has two levels of frontend testing:
1. Basic continuous monitoring on Pingdom every 10 minutes - *simple tests verifying that the user arrives at the correct page/URL when specific tabs are clicked*
2. More detailed tests using Protractor - *these tests need to be run on a computer with a browser*
</br>

### Milestones
#### Basic Health Checks
- [x] Basic health checks using Pingdom (every 10 minutes) - alert Beeline team if website is down
- [x] Test that the intro screen > main page flow is working

#### Search Route Flow
- [ ] Test that valid location input generates valid routes

#### Active Route Booking Flow
- [x] Test that the routes page > selection of one route flow is working 
- [x] Test that the selection of one pickup and dropoff stop flow is working 
- [ ] Test that the booking of one active route flow is working

#### Crowdstart Route Booking Flow
- [ ] Test that the crowdstart page > selection of one crowdstart route flow is working 
- [ ] Test that the booking of one crowdstart route flow is working

#### Login Flow
- [ ] Test that login with valid username and password input is successful
- [ ] Test that login with invalid username and password input is denied

#### Settings Flow
- [ ] Test that all components in the settings page can be viewed

</br>

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

