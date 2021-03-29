hmbMenu.onclick = function(s) {
  if (typeof(s) == "object") {
    return
  } else {
    switch (s) {
      case "Dessert Voting":
        ChangeForm(dessertVoting)
        break
      case "Describe You":
        ChangeForm(describeYou)
        break
      case "Favorite Exercises":
        ChangeForm(favExercises)
        break
      case "Mobile Nav":
        ChangeForm(mobileNav)
        break
    }
  }
}

/*
Dessert Voting
Describe You
Favorite Exercises 
Mobile Nav
hmbrMenu.onclick=function(s){ // when just click the control. 's' is
                              // the object returned
    if (typeof(s) == "object") { // do nothing - they just clicked on the control
       return
    } else {
       switch(s) {
            case "Hide Hamb See Btn":
            // hide the hamburger menu and show signin button
                hmbrMenu.hide()
                btnSignIn.show()
                break
            case "Overview":
                // Go to the Overview form
                ChangeForm(Overview)
                break
       }  //switch
   } //else
}
btnSignIn.onclick=function(){
  // if disappears (browser issue), force to reshow
  hmbrMenu.show()
}
*/