// spec.js

describe('Protractor Demo App', function() {
  // var firstNumber = element(by.model('first'));
  // var secondNumber = element(by.model('second'));
  // var goButton = element(by.id('gobutton'));
  // var latestResult = element(by.binding('latest'));

  beforeEach(function() {
    browser.get('https://app.beeline.sg/');
    browser.waitForAngular();
  });


// Is site alive?
// ===================
// Objective: Ensure that the app.beeline.sg site is alive and the 
//            connection from Intro page to Routes page works
// Test: Click on the 'Skip' button on the intro screen and the 'Okay' button on the modal
// Expected Results: The current url is app.beeline.sg/tabs/routes

  it('should get through the intro screens to the routes page', function() {

    // Click on 'SKIP' button in the Intro page
    var skipButton = $('body > ion-nav-view > ion-view > ion-content > button');
    skipButton.click();

    // Click on 'Ok' button on the Privacy Policy/Terms of Use modal on the Routes page
    var okayButton = $('body > div.popup-container.popup-showing.active > div > div.popup-buttons > button.button.ng-binding.button-default');
    okayButton.click();

    expect(browser.getCurrentUrl()).toEqual('https://app.beeline.sg/tabs/routes');
  });


// Search Route(s)
// ===================
// Objective: Ensure that the search function returns available routes on the front-end.
// Test: Enter a location name into the search bar in the Routes page of the Beeline app.
// Expected Result: If location is valid, route exists - the page displays an ng-repeat list of routes.
//                  Else: route does not exist - the page displays a link to page to suggest a new route.


// TO-DO

// Objective: End-to-end test of search function.
// Test: Enter a location name into the search bar in the Routes page of the Beeline app.
// Expected Result: If location is valid, route exists - the number of ng-repeats matches that in the database.
//                  Else: route does not exist - the number of ng-repeats = 0.


// TO-DO


// Route > Select This Stop Button Tests
// ====================

// Objective: Ensure that the Select This Stop Button is not clickable until one Pickup Stop is selected.
// Test 1: Before selecting a stop, click on the Select This Stop Button
// Expected Result 1: Select This Stop Button is not clickable

  it('should not enable the select this stop button if the pickup stop has not been chosen', function() {

    // Click on the first route available on the routes page
    browser.waitForAngular();
    var firstRoute = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view > ion-content > ion-content > div > ion-list > div > ion-item:nth-child(2)');
    firstRoute.click();

    // Click on the 'Select pickup stop' button
    browser.waitForAngular();
    var selectPickUpButton = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-detail.page-with-map.pane > ion-content > form > div:nth-child(2)');
    selectPickUpButton.click();

    // The 'Select this stop' button should not be enabled if the Pickup Stop has been selected while the Dropoff Stop has not
    browser.waitForAngular();
    expect(!$('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-stops.page-with-map.pane > ion-content > button').isEnabled());

  });

// Test 2: After selecting a stop, click on the Select This Stop Button
// Expected Result 2: Select This Stop Button is clickable

  it('should enable the select this stop button if the pickup stop has been chosen', function() {

    // Click on the first route available on the routes page
    browser.waitForAngular();
    var firstRoute = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view > ion-content > ion-content > div > ion-list > div > ion-item:nth-child(2)');
    firstRoute.click();

    // Click on the 'Select pickup stop' button
    browser.waitForAngular();
    var selectPickUpButton = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-detail.page-with-map.pane > ion-content > form > div:nth-child(2)');
    selectPickUpButton.click();

    // Click on the first available pick up stop
    browser.waitForAngular();
    var firstPickUpStopButton = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-stops.page-with-map.pane > ion-content > ion-content > div > div:nth-child(1)');
    firstPickUpStopButton.click();

    // The 'Select this stop' button should not be enabled if the Pickup Stop has been selected while the Dropoff Stop has not
    browser.waitForAngular();
    expect($('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-stops.page-with-map.pane > ion-content > button').isEnabled());

  });

// Objective: Ensure that the Select This Stop Button is not clickable until one Dropoff Stop is selected.
// Test 1: Before selecting a stop, click on the Select This Stop Button
// Expected Result 1: Select This Stop Button is not clickable

  it('should not enable the select this stop button if the dropoff stop has not been chosen', function() {

    // Click on the first route available on the routes page
    browser.waitForAngular();
    var firstRoute = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view > ion-content > ion-content > div > ion-list > div > ion-item:nth-child(2)');
    firstRoute.click();

    // Click on the 'Select dropoff stop' button
    browser.waitForAngular();
    var selectDropOffButton = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-detail.page-with-map.pane > ion-content > form > div:nth-child(3)');
    selectDropOffButton.click();

    // The 'Select this stop' button should not be enabled if the Pickup Stop has been selected while the Dropoff Stop has not
    browser.waitForAngular();
    expect(!$('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-stops.page-with-map.pane > ion-content > button').isEnabled());

  });

// Test 2: After selecting a stop, click on the Select This Stop Button
// Expected Result 2: Select This Stop Button is clickable

  it('should enable the select this stop button if the dropoff stop has been chosen', function() {

    // Click on the first route available on the routes page
    browser.waitForAngular();
    var firstRoute = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view > ion-content > ion-content > div > ion-list > div > ion-item:nth-child(2)');
    firstRoute.click();

    // Click on the 'Select dropoff stop' button
    browser.waitForAngular();
    var selectDropOffButton = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-detail.page-with-map.pane > ion-content > form > div:nth-child(3)');
    selectDropOffButton.click();

    // Click on the first available dropoff stop
    browser.waitForAngular();
    var firstDropOffStopButton = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-stops.page-with-map.pane > ion-content > ion-content > div > div:nth-child(1)');
    firstDropOffStopButton.click();

    // The 'Select this stop' button should not be enabled if the Pickup Stop has been selected while the Dropoff Stop has not
    browser.waitForAngular();
    expect($('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-stops.page-with-map.pane > ion-content > button').isEnabled());

  });

// Route > Book Next Trip Button Tests
// ====================

// Objective: Ensure that the Book Next Trip Button is not clickable until Pickup and Dropoff Stops are picked.
// Test 1: Before filling in Pickup and Dropoff, click on the Book Next Trip Button.
// Expected Result 1: Book Next Trip Button is not clickable.

  it('should not display the book next trip button if only neither pickup nor dropoff stop has been chosen', function() {

    // Click on the first route available on the routes page
    browser.waitForAngular();
    var firstRoute = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view > ion-content > ion-content > div > ion-list > div > ion-item:nth-child(2)');
    firstRoute.click();

    // The 'Book next trip' button should not be enabled if the Pickup Stop has been selected while the Dropoff Stop has not
    browser.waitForAngular();
    expect(!$('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-detail.page-with-map.pane > ion-content > div > button.button.primary-button').isEnabled());

  });

// Test 2: After ONLY filling in Pickup, click on the Book Next Trip Button.
// Expected Result 2: Book Next Trip Button is not clickable.

  it('should not display the book next trip button if only the pickup stop has been chosen', function() {

    // Click on the first route available on the routes page
    browser.waitForAngular();
    var firstRoute = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view > ion-content > ion-content > div > ion-list > div > ion-item:nth-child(2)');
    firstRoute.click();

    // Click on the 'Select pickup stop' button
    browser.waitForAngular();
    var selectPickUpButton = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-detail.page-with-map.pane > ion-content > form > div:nth-child(2)');
    selectPickUpButton.click();

    // Click on the first available pick up stop
    browser.waitForAngular();
    var firstPickUpStopButton = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-stops.page-with-map.pane > ion-content > ion-content > div > div:nth-child(1)');
    firstPickUpStopButton.click();

    // Click on the 'Select this stop' button
    browser.waitForAngular();
    var confirmPickUpStopButton = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-stops.page-with-map.pane > ion-content > button');
    confirmPickUpStopButton.click();

    // The 'Book next trip' button should not be enabled if the Pickup Stop has been selected while the Dropoff Stop has not
    browser.waitForAngular();
    expect(!$('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-detail.page-with-map.pane > ion-content > div > button.button.primary-button').isEnabled());

  });

// Test 3: After ONLY filling in Dropoff, click on the Book Next Trip Button.
// Expected Result 3: Book Next Trip Button is not clickable.

  it('should not display the book next trip button if only the dropoff stop has been chosen', function() {

    // Click on the first route available on the routes page
    browser.waitForAngular();
    var firstRoute = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view > ion-content > ion-content > div > ion-list > div > ion-item:nth-child(2)');
    firstRoute.click();

    // Click on the 'Select dropoff stop' button
    browser.waitForAngular();
    var selectPickUpButton = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-detail.page-with-map.pane > ion-content > form > div:nth-child(3)');
    selectPickUpButton.click();

    // Click on the first available pick up stop
    browser.waitForAngular();
    var firstPickUpStopButton = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-stops.page-with-map.pane > ion-content > ion-content > div > div:nth-child(1)');
    firstPickUpStopButton.click();

    // Click on the 'Select this stop' button
    browser.waitForAngular();
    var confirmPickUpStopButton = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-stops.page-with-map.pane > ion-content > button');
    confirmPickUpStopButton.click();

    // The 'Book next trip' button should not be enabled if the Pickup Stop has been selected while the Dropoff Stop has not
    browser.waitForAngular();
    expect(!$('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-detail.page-with-map.pane > ion-content > div > button.button.primary-button').isEnabled());

  });

// Test 4: After BOTH filling in Pickup and Dropoff, click on the Book Next Trip Button.
// Expected Result 4: Book Next Trip Button is clickable.

  it('should display the book next trip button if both the pickup and dropoff stops have been chosen', function() {

    // Click on the first route available on the routes page
    browser.waitForAngular();
    var firstRoute = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view > ion-content > ion-content > div > ion-list > div > ion-item:nth-child(2)');
    firstRoute.click();

    // Click on the 'Select pickup stop' button
    browser.waitForAngular();
    var selectPickUpButton = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-detail.page-with-map.pane > ion-content > form > div:nth-child(2)');
    selectPickUpButton.click();

    // Click on the first available pick up stop
    browser.waitForAngular();
    var firstPickUpStopButton = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-stops.page-with-map.pane > ion-content > ion-content > div > div:nth-child(1)');
    firstPickUpStopButton.click();

    // Click on the 'Select this stop' button
    browser.waitForAngular();
    var confirmPickUpStopButton = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-stops.page-with-map.pane > ion-content > button');
    confirmPickUpStopButton.click();

    // Click on the 'Select dropoff stop' button
    browser.waitForAngular();
    var selectPickUpButton = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-detail.page-with-map.pane > ion-content > form > div:nth-child(3)');
    selectPickUpButton.click();

    // Click on the first available pick up stop
    browser.waitForAngular();
    var firstPickUpStopButton = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-stops.page-with-map.pane > ion-content > ion-content > div > div:nth-child(1)');
    firstPickUpStopButton.click();

    // Click on the 'Select this stop' button
    browser.waitForAngular();
    var confirmPickUpStopButton = $('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-stops.page-with-map.pane > ion-content > button');
    confirmPickUpStopButton.click();

    // The 'Book next trip' button should not be enabled if the Pickup Stop has been selected while the Dropoff Stop has not
    browser.waitForAngular();
    expect(!$('#tabs > ion-tabs > div.pane.tab-content > ion-nav-view > ion-view.route-detail.page-with-map.pane > ion-content > div > button.button.primary-button').isEnabled());

  });


// Objective:
// Test:
// Expected Result:



// Objective:
// Test:
// Expected Result:

});
