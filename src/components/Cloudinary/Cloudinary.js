/////////////////////////////////////////////////////////////////
// CLOUDINARY THINGS                                           //
/////////////////////////////////////////////////////////////////

// creates widget w/ relative name/preset keys
var myWidget = cloudinary.createUploadWidget({
  cloudName: 're-elevated',
  uploadPreset: 'elevated-upload'
}, (error, result) => {
  if (!error && result && result.event === "success") {
    // logs the results of sending image to cloudinary
    console.log('Done! Here is the image info: ', result.info.url);
      // change picture image to equal whatver going into database as eg. userImage, strainImage ect***************IMPORTANT*********
    this.setState({pictureImage: result.info.url})
    console.log(result.info.url)

    /// need to submite this.State.userImage or this.State.strainImage to the database (make sure name = database key name)
  }
});

// // opens widget when click upload button
// document.getElementById("upload_widget").addEventListener("click", function () {
//   myWidget.open();
// }, false);


// </div>
// <button type="button" id="upload_widget" class="cloudinary-button">Upload Profile
//   Picture</button>*
// </form>
// </div>


// cloudinary script to tag at top of page - THIS IS FOR IMPORTS!
  // <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"></script>