# React-Photography

Personal photography website that is currently being built.
Documenting the experiences as they unfold through my world travels.
## Update 6.30.17
* Added fade transition when page loads
* fixed carousel button and display with infinity loop


## Update 6.2.17
* Text on hover in album section
* Won't be pushing publicly anymore as final version is coming up.
* adding blog
* add a non scrollable side bar for album description
* change speed of "scroll-to-top" function in album
* add description to about me 


## Documenting Challenges
I want to keep the website ultralight for fast loading, therefore I want to keep the code seperate from the images. Due to the following challenges I encountered the current solution is to use `https://docs.google.com/uc?+fileID`.

challenges faced:
* Google drive API hosting has been depricated since 8/16
* Dropbox API hosting has been depricated; however, does allow a limited of 4hrs temporary hosting before link is dead.
* Flickr API allows hosting; however, there are limited sizes availible to be displayed.
* Mongodb not feasible for what I want accomplished. Storing images in database is tedious since I constantly change and update photos.
* FileSystem is not ideal with limited space on local storage
* Currently, I'm using the lastest React-router which is v4.0.0. The useage of routing in react has drastically changed since after v3. v4 does not require the use of browserHistory or hashHistory.
* Stumbled an issue using lightbox, (react-images) the documentation is not fully written and difficult to implement. Solution: Found an alternative: react-image-lightbox has more support to its functionality and uses, therefore will be using this source instead.

##Built With
* ReactJs
* NodeJs
* ~~MongoDB~~
* ~~Mongoose~~
* Express
* bodyParser
* Morgan
* ~~Robomongo~~
* React-Bootstrap

## Authors

* Louis Huang - Full Stack Developer
