![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# The VisEnsemble

Welcome to The VisEnsemble Choir website! This is a mock-up website for a real choir for visually impaired people in Dublin called 'The Visionaries Choir'.  This website hopes to help people become more aware of what the choir is about and who are its members, motivate other visually impaired people to become members and to increase opportunities for public performances.

![Website responsiveness on multiple screen sizes](assets/documentation/responsiveness.png)

[Visit The VisEnsemble Live Website here](https://monipar.github.io/the-visensemble/)

## Overview

The aim of this project is to demonstrate skills in HTML and CSS.  Some JavaScript is used for interactivity and to make the website better accessible with screen-readers.

It is a mobile-first built and is responsive on tablet, desktop and screens up to 2000px wide. It is also compatible with all popular browsers. 

The website is intended to target the visually impaired community including friends, families and organisations for the blind/visually impaired/disabled as well as event organisers, State bodies, art Councils and the general public. 

They will be able to see the schedule of events, rehearsal times and locations as well as a way to learn about and contact the choir in order to join, seek further information or book them for an event. 

## Features

This section aims to describe the value of the different parts of the project for the user.

### Existing Features

* A Skip Navigation Link
  
  Featured on all four pages, the skip navigation link comes into view when it gets keyboard focus.  This allows the returning user to skip the logo and navigation links and go straight to the main content of the page.

  ![Skip Navigation Button in Focus](assets/documentation/tabdesk-skipnav.png)

* The Header / Navigation Bar

  Featured on all four pages, the fully responsive header includes:

1. A link to the Logo which brings the user to the home page.
2. A hamburger button on mobile which opens up a navigation list with links to the Home, About, Events and Contact pages. This helps reduce the clutter on the header by keeping the page links neatly stowed away until the user navigates to the hamburger button. The links have a hover and focus effect to help the user identify them as links. 
3. Links to the Home, About, Events and Contact pages on tablet and desktop which help the user to easily navigate from page to page without having to revert back to the previous page via the back button. The link to the current page is also underlined to help the user identify the page they are on. 

#### Mobile Screenshot
![Header Open Navigation on Mobile](assets/documentation/mob-nav-open.png)

#### Tablet / Desktop Screenshot
![Header Navigation Links on Tablet and Desktop](assets/documentation/tabdesk-header.png)

* The Landing Page / Home Page Hero

  Includes a photograph of the choir with a text overlay which captures the essence of the choir.  This section introduces the sighted user to the choir with an eye catching image to grab their attention, the text gives the non-sighted user a very brief introduction to the choir.

#### Mobile Screenshot
                   iPhone 6/7/8 
![Home page header and hero image with text overlay](assets/documentation/mob-home-hero.png)

#### Desktop Screenshot
                    laptop width 1024px 
![Home page header and hero image with text overlay](assets/documentation/lap-home-hero.png)

* Home Page Main Content

  The Home Page Main Content features:
1. An inspiring quote by Helen Keller which introduces the ethos of the choir presented in a blockquote format with a picture of Helen Keller on the left. This is meant to motivate the user to read on about the vision of the choir.
2. The Vision Section allows the user to see the benefits of joining the choir, as well as the benefits of singing overall. It is presented with icons which help the sighted user to distinguish between the different statements presented.  Screen readers will ignore these icons completely and move on to the text instead. This should encourage the user to consider joining the choir to help improve their quality of life. 
3. The Call to Action (CTA) card includes a background image with a thick orange border to draw the eye. The text overlay expresses the call for new members and directs the eye to the bright orange button at the bottom which links to the contact page. The button has a hover and focus effect to make the user aware that it will lead to somewhere. This is meant to give the user a quick and easy way to get to the sign up page at the end.  It is placed on the Home page to encourage more users to get in touch. 

#### Mobile Screenshots
                  Galaxy S9
![Home page quote and vision statements](assets/documentation/mob-home-quote-vision.png)

                  iPhone 12 Pro
![Home page call to action card](assets/documentation/mob-home-cta.png)
#### Tablet Screenshot
                  Surface Pro 7
![Home page quote and vision statements and call to action](assets/documentation/tab-home-quoteviscta.png)


* A Back to Top Link
  
  Featured on all four pages, the back to top button is placed right before the footer for easy navigation. It is linked with the skip navigation link to bring the sighted user to the top of the page and gives the keyboard navigation user the option to either skip to main content or go through the navigation list in the header.  It also has a hover and focus effect to help the user identify it as an interactive asset.  

![Back to Top Button and footer](assets/documentation/mob-backtotop-footer.png)

* A Footer

  Featured on all four pages, includes icons which when clicked or focussed on will bring up a phone number and email address for easy contact with the choir master.  Screen readers are able to read out the phone numbers and the email address as well.  The social icons are labelled links which will open in a new tab to allow for easy navigation for the user.  The footer is valuable to the user as it encourages them to get in touch via phone or email if they prefer that method of contact and it also allows the user to keep connected via social media. (Refer to image above)

* The About Page

  1. The About page opens with an about us section which is overlayed on a background image.  It displays a paragraph on the history of the choir and a read more button which when clicked brings up the rest of the choir history. The read more button was added to reduce the amount of text visible on the page, it is up to the user if they want to find out more about the history of the choir or move on to the next section. The feature has a read less button as well which will hide the second chunck of text once read. 
  2. 


### Future Features

## UX / UI
### Site Goals
### Design Choices
### User Stories
### Wireframes

## Testing
### Validator Testing
### Lighthouse Testing
### Manual Testing
### Bugs

## Deployment
The project was deployed to GitHub pages by navigating to the Settings tab in the GitHub repository and selecting the Main Branch from the source section drop-down menu.  Once the Main branch was selected, the page automatically refreshed to display a detailed ribbon indicating successful deployment.

The live link can be found here - https://monipar.github.io/the-visensemble/
  

## Citation of Sources
### Content

* The fonts used throughout the page were taken from https://fonts.google.com/
* The icons used throughout the page were taken from https://fontawesome.com/icons
* Instructions on how to implement the Skip Navigation, Back to Top links and Accessible, Smooth Scroll to Top Styling was taken from https://ashleemboyer.com/blog
* The quotation on the Home page was taken from https://www.goodreads.com/quotes/420478-the-only-thing-worse-than-being-blind-is-having-sight
* The text for the Conductor's Bio on the About page was taken from http://www.kellymusicservices.com/frankbio.html
* Instructions on how to make the Read More button accessible with screen readers was taken from https://jolvera.dev/posts/accessible-read-more-links
* The text for the testimonials section on the About page was inspired from https://www.fightingblindness.ie/news/the-choir-has-a-special-place-in-my-heart-its-my-rock/
* Instructions on how to make the flip card accessible with keyboard navigation were taken from https://stackoverflow.com/questions/62418249/css-flip-card-how-can-i-activate-the-flip-via-tab-so-it-is-keyboard-accessible
* Instructions on how to write the syntax for responsive images in HTML were taken from https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/
* Instructions on how to optimise images for better Cumulative Layout Shifts (CLS) were taken from https://web.dev/optimize-cls/?utm_source=lighthouse&utm_medium=devtools#images-without-dimensions
* Instructions on how to style textarea width for the Contact Form was taken from https://davidwalsh.name/textarea-width

### Media
* The VisEnsemble Logo was designed by https://www.circlestrafemedia.com/
* The background image for the Home Hero was taken from [this open source site](https://unsplash.com) 
* The public domain image of Helen Keller on the Home page was taken from https://cdn18.picryl.com/photo/2019/10/07/helen-keller-no-8-0bcfc1-640.jpg 

### Code
