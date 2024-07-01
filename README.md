# PROJECT MEMOVOCABS



## Table of Content

- [About the project](#about-the-project)
- [Features](#features)
  - [Existing Features](#existing-features)
  - [Features left to implement](#features-left-to-implement)
- [Testing](#testing)
  - [Validator Testing](#validator-testing)
  - [Unfixed Bugs](#unfixed-bugs)
- [Deployment](#deployment)
  - [Local Deployment](#local-deployment)
  - [Publishing](#publishing)
- [Credits](#credits)
  - [Content](#content)
  - [Media](#media)
  - [Special Thanks](#special-thanks)
- [Author](#author)
- [License](#license)


## About this project

This project is a memory game with the added feature of training vocabulary. The project was specifically designed for Anne's Langauge Retreat to aid the teacher with doing a recap of the vocabulary learnt in the previous lesson. 
The player has the choice between three sets of cards, gradually rising the level of difficulty as well as introducing new words with each level. Cheerful and relaxing music adds to the fun of playing the game and rounds off the user experience.
The structure of the page allows for easy amendments to images and vocabulary displayed and is therefore easily transferrable to be used by another business.

![Responsive Mockup](assets/images/memoVocabs_responsive_mockup.png)


## Features 

### Existing Features

- __Background Image__

  - The background image shows a beach in sunset, the location of Anne's Language retreat the game was designed for. The calming  

- __Colour Palette__

  - The color palettes used throughout the page are a soft autunm green, in shades from light bis dark, combined with a light shade of beige for font. 
  - Both colour schemes reflect the colours of background image and both features combined create a harmonious overall picture.
  - Both colour schemes are easy on the eyes, creating an inviting atmosphere and giving the user a feeling of warmth and cosiness.

    ![Color Palette Green](assets/images/soft_autumn_green.png)     ![Color Palette Beige](assets/images/soft_autumn_beige.png)

    

- __Navigation Bar__

  - Featured on all four pages, the full responsive navigation bar includes links to the Logo, Homepage, Rooms and Partners Page as well as to the Enquiry Form and is identical in each page to allow for easy navigation.
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 
  - Upon expanding the menu a solid line becomes visible under the active menu item, in addition to each item changing colour when hovered over or being tapped. Both features indicate to the user which part of the page they are currently on and help to navigate to another part of the page easily.

    ![Nav Bar](../README/Media/nav_bar.png)    

- __The landing page__

  - The first feature potential guests see when landing on the page, is an image of a traditional Irish Cottage, their holiday home, with a greeting in Irish and English underneath. This equally reflects the well-known, warm and welcoming hospitality people come to Ireland for as it is a great sales pitch.
  - Combined with the image the Logo of the business above communicates clearly to the user what the business has to offer, a home away from home in a rural setting, perfect for a relaxing holiday, and an opportunity to practice or improve their language skills if so desired.

    ![Landing Page](../README/Media/landing_page.png)

- __Intro Section__

  - The intro section provides the user with an overview of where the Bed and Breakfast is located and what the advantage is for them to book the place.
  - The section addresses both, the tourist visiting the region for exploring the Ring of Kerry by outlining the advantage of being located in the heart of the Ring of Kerry, and the language students looking for a different type of language holidays off the beaten tracks, outlining the legitimacy of the language courses offered by naming the schools supporting the business.

    ![Intro Section](../README/Media/intro_section.png)

- __Overview__

  - This section provides the user with more details about the surrounding area, the facilities and touristic attractions located nearby.
  - To make staying at the Bed and Breakfast even more appealing the paragraph not only informs the user about possible activities during their stay but also outlines that the business cooperates with mutiple providers directly offering to assist with bookings which saves the potential guest the hassle of having to reserach providers of their own.
  - A clickable link to the list of partners websites makes it easy for the user to learn more about the activities offered and serves also as another sales pitch for encouraging the user to contact the business cause people often associate the term "partner" automatically with "discount", which is offered by the partners when staying at Anne's Language Retreat.

    ![Overview](../README/Media/overview.png)

- __Video__
  - A short video, done by the owner of the business, at the end of the overview section whets the appetite of the user for more.
  - The video shows the user the beauty of the area they are going to travel and how easy it is to combine activities with points of interested

    ![Video](../README/Media/video_activities_in_waterville.png)

- __The Footer__ 

  - The footer section includes links to the relevant social media sites for Anne's Language Retreat. The links will open to a new tab to allow easy navigation for the user.
  - The footer is valuable to the user as it encourages them to keep connected via social media.
  - The footer also includes the address and contact details for the business. 
  - Both, the logo and the email address are clickable to provide another spot for the user to either return to the homepage or send an email to the business. The hyperlink linked to the logo will open to a new tab, the hyperlink linked to the email address connects to the email app on the user's device.

      ![Footer](../README/Media/footer.png)

  - __Rooms__

  - This page shows the user the list of rooms they can choose from, the facilities included in the rooms and the prices for single or double occupancy.
  - An image of each room type shows what each room looks like and helps choosing the right room for their stay.
  
    ![Rooms](../README/Media/standard-room.png)

- __Partner Page__

  - The partner page includes the list of partners the business cooperates with including an overview about tours or products offered and their contact details. The links will open to a new tab to allow easy navigation for the user. It is also supporting the user's experience to not have to hit the 'back' button to return to the page of the business and helps the business avoiding to loose a potential customer.
  - This section is valuable for both, the user and the business. The user finds all informatin needed and in case they only contact the partner, the partner will advertise the B&B and inform the user about the discounts offered when staying at the Bed and Breakfast.


    ![Partner](../README/Media/partner_page.png)

- __Enquiry form__

  - This page will allow the user to get in contact with the business.  The user will be asked to submit their name, phone number, email address and a brief message. 
  - Additionally they have a list of clickable options for  more information about a language courses. This field is optional.
  - Below the contact form the user finds the contact details of the business again as well as directions from Dublin and Cork Airport.
  - A clickable map image opens up to Google maps in a new tab.
  
    ![Contact Form](../README/Media/contact_form.png)
    ![location](../README/Media/location.png)

### Features Left to Implement

- Gallery page
- Captcha
- Translation of the page content to German, French, Spanish and Simple Chinese

## Testing 

### Initial Checks

  ### Responsiveness

    This part of the testing was done in Lighthouse throughout the project to ensure the content of each page remained fully responsive and 100% visible after each amendment. The testing tool was set to the most common Samsung, Apple and Google products to cover the full range of screens from the smallest being the Galaxy fold Z 5 (344px) to a curved 27" external monitor.

  ### Functionality

  Features checked during testing included checking:

    Nav Bar

      - that up until screens width 768px (tablets and larger mobiles) the menu is hidden in the burger icon in the upper left corner and expands and collaps when tapped

      - that upon expanding the menu the solid line indicating the part of the page the user is currently on is visible under the correct active menu item

      - that from screen width 768px onwards the nav bar is spread out and adjusts automatically to take up the available space and the features of a solid line under the menu item and the menu items changing colours is inherited

      - that the hyperlink linked to each each menu item and the logo is working as expected and connect to the correct parts of the webpage


    Homepage

      - that the hyperlink linked to "our partners" in the last sentence is working and connects the user to the partner page
      - that the hyperlink linked to the email address in the footer is working and connects to the email app on the user's device and opens up a new email window with the business email automatically filled into the 'To'-line
      - that the hyperlink linked to the logo in the footer is working and takes the user back to the homepage


    Partner page

      - that the hyperlink linked to the webpage address of each partner is working as expected and opens up in a new page
      - that the hyperlink linked to the email address is working and connects to the email app on the user's device and opens up a new email window with the business email automatically filled into the 'To'-line


    Enquiry form

    - that the fields mandatory to fill in are working as expected so the user cannot submit an incorrect or incomplete form
    - that the radio buttons for choosing a language course are working as expected
    - that the hyperlink linked to the email address in the contact section is working and connects to the email app on the user's device and opens up a new email window with the business email automatically filled into the 'To'-line
    - that the hyperlink linked the phone is working and connects to a communication app on the users device such as Facetime
    - that the map image is clickable and opens up to Google Maps in a new tab


### User Testing

    - The user experience is essential and to ensure the webpage meets the business needs I selected a group of people including the partner of the busniess and ask them to check the page and the content included to ensure it lives up to the expectation of potential guests

    - The insides provided helped me to further improve the layout, correcting typos I had missed, and was also another test to check if the page is viewable and all links are actionable on different devices each set to the personal preferences of its owner.

    - The group reacted very well to the colour scheme and confirmed the colours gave them a homey feeling while scrolling through the page.

### Testing of Performance, Accessibility, Best Practice, SEO

  - Tools used: Lighthouse, catchpoint

  #### test results for desktop: 99.5% 

  ![Home](../README/Media/desktop_home.png) ![Rooms](../README/Media/desktop_room.png) ![Partner](../README/Media/desktop_partner.png) ![Enquiry](../README/Media/desktop_contact.png) 

  #### test results for mobile: 91%

  ![Home](../README/Media/mobile_home.png) ![Rooms](../README/Media/mobile_rooms.png) ![Partner](../README/Media/mobile_partner.png) ![Enquiry](../README/Media/mobile_contact.png) 

 - bugs identified and solved: image ratio, site.manifest, visibility of content in footerm, accessibility

  - I countered the errors by 
    - uploading resized images to rooms.html and home.html
    - adjusted the shade of the colors in the areas listed on the report while still sticking to so color palettes
    - improved the accessibility by adding aria-label in the missing parts of the code

  - The homepage and the rooms page still have a lower performance than the other pages, the homepage due to the hero image and the video and the rooms page due to the images of the rooms.
  -  As both elements are crucial for selling the property to the user and none of the test users reported any loading issues of either of the image elemenst or the video I am confident this will not turn into an issue in the future.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmerzann.github.io%2FProject-Anne-s-Language-Retreat%2F)
- CSS
  - No errors were found when passing through the official [W3C CSS validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmerzann.github.io%2FProject-Anne-s-Language-Retreat%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

### Unfixed Bugs

    All implemented elements are working as exspected. No bugs found during testing.
    Future changes will include updating the media queries for enquiry.html to make use of the additional space on screens from 992px and Larger.

## Deployment

  ### Local Deployment

  ### Publishing

    - The site was deployed to GitHub pages. The steps to deploy are as follows: 
    - In the GitHub repository, navigate to the Settings tab 
    - From the source section drop-down menu, select the Master Branch
    - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://merzann.github.io/Project-Anne-s-Language-Retreat/ 


## Acknowledgement

### Content 

  - The template used for building this project was provided by Code Institute on Github for student projects [ci-full-template](https://github.com/Code-Institute-Org/ci-full-template/)
- The icons in the footer and 'Send Email'-button on the enquiry page were taken from [Font Awesome](https://fontawesome.com/)
- The color palettes used were created by color-hex [color-hex](https://www.color-hex.com/autumn-color-palettes/)
- Logo and favicon were created in [favicon.io](https://favicon.io/)
- Ideas on the general structure of a webpage and features that can be included were taken from 
  - the Walkthrough-Project by Code Institute [Love Running Walkthrough-Project](https://merzann.github.io/love-running/)
  - the Kilkea Castle Website [Kilkea Castle Webpage](https://www.kilkeacastle.ie/)
  - the Sika Lodge Website [Silka Lodge Webpage](https://sikalodgekillarney.com/)
- Instructions and ideas on how to write a ReadMe were taken from the YouTube video "How to make a ReadMe.md file! Easy way!" by Akash Pambhar [YouTube Akash Pambhar](https://www.youtube.com/watch?v=mb9FJzkwmwg/)

### Media

- The photos and video used on Homepage and Rooms-Page belong to me, all rights reservered
- My partners consented to me using images and logo on the partner page

### Special Thanks

- Katja Ehrsam for testing the code and the page thoroughly and helping me identify bugs I had missed or not thought of
- A big thank you again to the group of test users for reviewing the website froma a customer's perspective and providing valuable Feedback
- Martina Williams for proof-reading the content


## Author

- [merzann](https://github.com/merzann)


## License

[![MIT License](https://img.shields.io/badge/License%20-%20MIT-olivgreen)](LICENSE.md)
