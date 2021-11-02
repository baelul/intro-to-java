function creditsCalc(credits) {
  if (credits < 12) {
    console.log(credits + " credits? You aren't a full time student! You should take more classes...");
  } else if (credits > 18) {
    console.log(credits + " credits? Woah, you're overloading your schedule. Let's not go TOO crazy.");
  } else {
    console.log(credits + " credits? Nice! A perfect schedule for the new semester.");
  }
}

creditsCalc(2)  // too little
creditsCalc(22) // too much
creditsCalc(15) // good
creditsCalc(12) // good
creditsCalc(18) // good
creditsCalc(16) // good
