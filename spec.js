// spec.js

describe('Beeline App', function() {

  beforeEach(function() {
    browser.get('https://app.beeline.sg/');
    browser.waitForAngular();
  });


// Basic Health Check
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


// Search Route Flow
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


// Route Booking Flow > Select This Stop Button Tests
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

// Route Booking Flow > Book Next Trip Button Tests
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


// TO-DO: Tests for the Post-login Route Flow




// Crowdstart Route Booking Flow > Book Next Trip Button Tests
// ====================
// Objective: Get to the crowdstart page from the routes page
// Test: Click on the crowdstart button and the okay button
// Expected Result: Current URL is the crowdstart page URL
  it('should get to the crowdstart page', function() {

    // Click on 'Crowdstart' button in the tabs
    browser.waitForAngular();
    var crowdStartButton = $('#tabs > ion-tabs > div.tab-nav.tabs > a.nav-text.nav-kickstarter.tab-item');
    crowdStartButton.click();

    // Click on 'Ok' button on the modal on the Crowdstart page
    browser.waitForAngular();
    var okayButton = $('body > div.popup-container.popup-showing.active > div > div.popup-buttons > button');
    okayButton.click();

    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toEqual('https://app.beeline.sg/tabs/crowdstart');
  });

// Objective: Purchase a crowdstart route pass for one crowdstart route
// Test 1: Click on a crowdstart route and click on the 'Review my order' button without clicking the 'Yes, I want to pre-order' radio button
// Expected Result: 'Review my order' button should not be enabled
  it('should not be able to click on \'Review my order\' without clicking on the \'Yes, I want to pre-order\' radio button', function() {

    // Click on 'Crowdstart' button in the tabs
    browser.waitForAngular();
    var crowdStartButton = $('#tabs > ion-tabs > div.tab-nav.tabs > a.nav-text.nav-kickstarter.tab-item');
    crowdStartButton.click();

    // Click on the first crowdstart route on the Crowdstart page
    browser.waitForAngular();
    var firstCrowdStartRoute = $('#tabs > ion-tabs > div:nth-child(3) > ion-nav-view > ion-view > ion-content > ion-content > div > div:nth-child(3) > ion-item:nth-child(1)');
    firstCrowdStartRoute.click();

    // The 'Review my order' button should not be enabled
    browser.waitForAngular();
    expect(!$('#pg_kickstarter_detail > ion-content > div > div:nth-child(3) > div.select-bid.item-text-wrap > button').isEnabled());
  });

// Objective: Purchase a crowdstart route pass for one crowdstart route
// Test 2: Click on a crowdstart route and click on the 'Review my order' button after clicking the 'Yes, I want to pre-order' radio button
// Expected Result: 'Review my order' button should be enabled
  it('should be able to click on \'Review my order\' after clicking on the \'Yes, I want to pre-order\' radio button', function() {

    // Click on 'Crowdstart' button in the tabs
    browser.waitForAngular();
    var crowdStartButton = $('#tabs > ion-tabs > div.tab-nav.tabs > a.nav-text.nav-kickstarter.tab-item');
    crowdStartButton.click();

    // Click on the first crowdstart route on the Crowdstart page
    browser.waitForAngular();
    var firstCrowdStartRoute = $('#tabs > ion-tabs > div:nth-child(3) > ion-nav-view > ion-view > ion-content > ion-content > div > div:nth-child(3) > ion-item:nth-child(1)');
    firstCrowdStartRoute.click();

    // Click on the 'Yes, I want to pre-order' radio button
    browser.waitForAngular();
    var verifyButton = $('#pg_kickstarter_detail > ion-content > div > div:nth-child(3) > div.select-bid.item-text-wrap > ion-list > div > ion-item');
    verifyButton.click();

    // The 'Review my order' button should be enabled
    browser.waitForAngular();
    expect($('#pg_kickstarter_detail > ion-content > div > div:nth-child(3) > div.select-bid.item-text-wrap > button').isEnabled());
  });


// Objective: Pre-order crowdstart summary flow
// Test: On the Pre-order summary page, click on the 'Log in' button without clicking on the 'I read and agree with the above terms...' button.
// Expected Result: 'Log in' button should be disabled.

  it('should not get to the \'Log in\' page without clicking on the \'I read and agree with the above terms...\' button', function() {

    // Click on 'Crowdstart' button in the tabs
    browser.waitForAngular();
    var crowdStartButton = $('#tabs > ion-tabs > div.tab-nav.tabs > a.nav-text.nav-kickstarter.tab-item');
    crowdStartButton.click();

    // Click on the first crowdstart route on the Crowdstart page
    browser.waitForAngular();
    var firstCrowdStartRoute = $('#tabs > ion-tabs > div:nth-child(3) > ion-nav-view > ion-view > ion-content > ion-content > div > div:nth-child(3) > ion-item:nth-child(1)');
    firstCrowdStartRoute.click();

    // Click on the 'Yes, I want to pre-order' radio button
    browser.waitForAngular();
    var verifyButton = $('#pg_kickstarter_detail > ion-content > div > div:nth-child(3) > div.select-bid.item-text-wrap > ion-list > div > ion-item');
    verifyButton.click();

    // Click on the 'Review my order' button
    browser.waitForAngular();
    var reviewOrderButton = $('#pg_kickstarter_detail > ion-content > div > div:nth-child(3) > div.select-bid.item-text-wrap > button');
    reviewOrderButton.click();

    // The 'Log in' button should not be enabled
    browser.waitForAngular();
    expect(!$('#pg_kickstarter_summary > ion-content > div > div:nth-child(6) > button').isEnabled());

  });

  // Test 2: On the Pre-order summary page, click on the 'Log in' button without clicking on the 'I read and agree with the above terms...' button.
  // Expected Result: 'Log in' button should be disabled.

  it('should get to the \'Log in\' page after clicking on the \'I read and agree with the above terms...\' button', function() {

    // Click on 'Crowdstart' button in the tabs
    browser.waitForAngular();
    var crowdStartButton = $('#tabs > ion-tabs > div.tab-nav.tabs > a.nav-text.nav-kickstarter.tab-item');
    crowdStartButton.click();

    // Click on the first crowdstart route on the Crowdstart page
    browser.waitForAngular();
    var firstCrowdStartRoute = $('#tabs > ion-tabs > div:nth-child(3) > ion-nav-view > ion-view > ion-content > ion-content > div > div:nth-child(3) > ion-item:nth-child(1)');
    firstCrowdStartRoute.click();

    // Click on the 'Yes, I want to pre-order' radio button
    browser.waitForAngular();
    var verifyButton = $('#pg_kickstarter_detail > ion-content > div > div:nth-child(3) > div.select-bid.item-text-wrap > ion-list > div > ion-item');
    verifyButton.click();

    // Click on the 'Review my order' button
    browser.waitForAngular();
    var reviewOrderButton = $('#pg_kickstarter_detail > ion-content > div > div:nth-child(3) > div.select-bid.item-text-wrap > button');
    reviewOrderButton.click();

    // Click on the 'I read and agree with the above terms...' button
    browser.waitForAngular();
    var checkTermsButton = $('#pg_kickstarter_summary > ion-content > div > div:nth-child(5) > div');
    checkTermsButton.click();

    // The 'Log in' button should be enabled
    browser.waitForAngular();
    expect($('#pg_kickstarter_summary > ion-content > div > div:nth-child(6) > button').isEnabled());

  });

// TO-DO: Tests for the Post-login Crowdstart Flow

});
