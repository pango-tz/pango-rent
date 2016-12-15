# Pango Rent
![Pango](.images/pango.png) 

## Setup
To get started ensure that the following has been executed on your development machine:

```
> npm install -g ionic cordova
> git clone https://github.com/pango-tz/pango-rent.git
> cd pango-rent
> npm install
``` 

## Run App
To test the app in various testing environments do the following:

### Desktop
```
> ionic serve
```

## CLI Documentation

To understand more about the command line options, visit the CLI page of ionic:
[Ionic CLI](http://ionicframework.com/docs/v2/cli). Specifically, check out the [Generate](http://ionicframework.com/docs/v2/cli/generate/) page.

## Ionic Components 
To learn more about the components and api visit:
* [Ionic Components](http://ionicframework.com/docs/v2/components/)
* [Ionic API](http://ionicframework.com/docs/v2/api/)

## Cordova Platforms (configuring the app build for Android and iOS)

* Pre-requisite: Java 1.8.x must be installed. JAVA_HOME environment and PATH defined:
    export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_102.jdk/Contents/Home
    export PATH=$JAVA_HOME/bin:$PATH

* If you want to build for Android you should install Android Studio: https://developer.android.com/studio/index.html
* Use Android Studio to install the Android SDK
* Add the ANDROID_HOME environment variable and add the following items to the PATH as in the below example (done on OSX):

    export ANDROID_HOME=/Users/arcshannon/Library/Android/sdk
    export PATH=$ANDROID_HOME/platform-tools:$ANDROID_HOME/build-tools/24.0.1:$ANDROID_HOME/tools:$PATH

    Notes: 
    ~/Library/Android/sdk is where Android Studio installs the Android SDK on OSX.
    The zipalign utility is in the ../build-tools/[version #] directory.

* Configure your Cordova build environment to support Android and iOS platforms.
  Follow the steps in "Add Platforms" at: https://cordova.apache.org/docs/en/latest/guide/cli/

## Building the app for Platforms
* Cordova can build all platforms or just a platform of your choosing.
  Follow the steps in "Build the App" at: https://cordova.apache.org/docs/en/latest/guide/cli/
  
  $ cordova build
  $ cordova build android
  $ cordova build ios

  Note the location of the build artifacts in the pango-rent project.

## Run the Native Android or iOS app
You have several options for running the app.
1. You can follow the steps that Google requires to sign, and zipalign and app before it can be deployed to 
   a real Android device (i.e. your phone).  These are provided here: https://ionicframework.com/docs/guide/publishing.html
   After you successfully complete these steps, copy the final .apk file to your device and double click to install/launch it.

2. You can use the Cordova cli to launch an android emulator and run the Application.  Note that you will first need to create an 
   emulated device which can be done in Android Studio (see next option).

3. Open Android Studio and select Import project.
   Use the file explorer to select this directory in your pango-rent project:
   ../pango-rent/platforms/android

   Accept all the defaults and allow Android Studio to open your project.
   Under the Run menu, click Run android which will launch the Android Studio runner.
   You will be prompted to select a device.
   Choose the option to create a new device and pick one of the emulators.
   This will take a few minutes to download the emulator and once it is installed becomes available also to the Cordova cli mentioned in option 2 above.
   As a part of the build you will be prompted to provide the keystore information configured in step 1 above.
   After that the runner will build, package, and deploy the app to the emulator and launch it.
   You can have as many different emulators as you like.
