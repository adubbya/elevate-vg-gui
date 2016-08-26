# elevate-vg-gui

A themable game launcher for PC

[![Travis](https://img.shields.io/travis/miniArray/elevate-vg-gui.svg)](https://travis-ci.org/miniArray/elevate-vg-gui) &nbsp;
[![Codecov](https://img.shields.io/codecov/c/github/miniArray/elevate-vg-gui.svg)](https://codecov.io/github/miniArray/elevate-vg-gui) &nbsp;
[![bitHound Overall Score](https://www.bithound.io/github/miniArray/elevate-vg-gui/badges/score.svg)](https://www.bithound.io/github/miniArray/elevate-vg-gui) &nbsp;
[![npm](https://img.shields.io/npm/v/elevate-vg-gui.svg)](https://www.npmjs.com/package/elevate-vg-gui)

[![bitHound Dependencies](https://www.bithound.io/github/miniArray/elevate-vg-gui/badges/dependencies.svg)](https://www.bithound.io/github/miniArray/elevate-vg-gui/master/dependencies/npm) &nbsp;
[![miniArray](https://img.shields.io/badge/made%20by-miniArray-32bbee.svg)](http://miniArray.com) &nbsp;
[![License](https://img.shields.io/npm/l/elevate-vg-gui.svg)](https://tldrlegal.com/license/gnu-general-public-license-v3-(gpl-3))

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

- [Features](#features)
      - [*Planned*](#planned)
- [Install](#install)
- [Setup](#setup)
- [Start](#start)
- [Supported OS](#supported-os)
- [Supported Launchers](#supported-launchers)
- [Naming Schemes](#naming-schemes)
	- [Software (games)](#software-games)
	- [Launchers (emulators, steam, etc)](#launchers-emulators-steam-etc)
	- [Media (screenshots, etc)](#media-screenshots-etc)
- [FAQ](#faq)
- [Releases Notes](#releases-notes)
- [Contributors](#contributors)
- [License](#license)



<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/miniArray/elevate.git
# Go into the repository
cd elevate
# Install dependencies and run the app
npm install
```

[Back to top](#table-of-contents)

## Setup 

From your command line:

```bash
# Run the setup
npm run setup
```

[Back to top](#table-of-contents)

## Start 

From your command line:

```bash
# Start elevate
npm start
```

[Back to top](#table-of-contents)


### elevate folder

You will need to set a root folder where elevate will look for [**games**](#software-games), [**launchers**](#launchers-emulators-steam-etc), [**images**](#media-screenshots-etc) etc. 

Currently, elevate adheres to a strict directory layout to simplify development during alpha stages. Expect this to be more flexible in the future.

* \<elevate-dir\>: elevate's root directory **ex: C:\elevate**
	* \software: Game software (roms, exe, etc). See [software naming schemes](#)
    * \launchers: Emulators and other software launchers. See [launcher naming schemes](#)
    * \media: Screenshots and other imagery. See [media naming schemes](#)
    * \firmware: Platform BIOS and other firmware files.
    * \utilities: A few utility applications to help with launching

[Back to top](#table-of-contents)

## Supported OS

- Windows 7, 8, 10
- ~~OS X~~: (Possible support in a future release)
- ~~Linux~~: (Possible support in a future release)

[Back to top](#table-of-contents)

## Supported Launchers

* BizHawk (multi emu)
* Zelda Classic
* Steam

[Back to top](#table-of-contents)

## Supported Platforms

- [Zelda Classic](http://www.zeldaclassic.com)
- [Steam](htp://steampowered.com)

- Nintendo Entertainment System / Famicom / Famicom Disk System
- Super Nintendo
- Nintendo 64
- Game Boy, Game Boy Color, and Super Game Boy
- Game Boy Advance
- Sony PlayStation
- Sega Master System, Game Gear, and SG-1000
- Sega Genesis / Sega-CD
- Sega Saturn
- PC-Engine (TurboGrafx-16) / CD-ROM & SuperGrafx
- Atari 2600
- Atari 7800
- Atari Lynx
- ColecoVision
- TI-83 Calculator
- Wonderswan and Wonderswan Color
- Apple II

[Back to top](#table-of-contents)
    
## Naming Schemes

### Software (games)

> Future releases will be less strict with software location

The software directory contains subfolders with the appropriate platform name (created during initial setup). *Games not placed in the appropriate platform subfolder will be ignored*

* \<elevate-dir\>\software
	* atari-2600
    * flash
    * nintendo-entertainment-system-nes
	* steam-win
    * win
    * zelda-classic
    * ..
    
Game software (roms, executables, etc) can be placed in its appropriate platform directory.

* \<elevate-dir\>\software\nintendo-entertainment-system-nes
	* super mario bros 3.nes
	* Kirby s Adventure (U) (PRG 1) [!].nes
    * ..
    
Game software can be named how ever you like, just make sure the appropriate extention is still there.

[Back to top](#table-of-contents)

### Launchers (emulators, steam, etc)

> Caveat: For now, Steam **must** be installed in the \<elevate-dir\>\software\steam-win directoy.

Launchers are the applications that let you run games that cant be executed directly wether it be DRM or emulation.

> BizHawk launcher is downloaded and installed during setup

[List of supported launchers](#supported-launchers)

Directly under the launchers directory should place launchers with the folowing folder naming scheme:

\<launcherName\>\\\<release-os-arch\>

Example:

- \<elevate-dir\>\launchers
	- \BizHawk
    	- \1.11.6-win-x86
    	- \0.9.22-win-x86

Some games work better (or worse) on particular launcher releases (im looking at you [dolphin](https://dolphin-emu.org))

If you dont care/want to deal with release directories just name one folder **latest** and place launcher files inside.

Example:

- \<elevate-dir\>\launchers
	- \BizHawk
    	- \latest
        	- EmuHawk.exe
            - ..

[Back to top](#table-of-contents)

### Media (screenshots, etc)

> Media scanning is an early stage of development

Media files are the images that elevate will display for a particular game such as screenshots and box art.

#### Types (currently)

- Screenshot (Gameplay): Image of the game during gameplay 
- Screenshot (Title): Image of the game on its title/intro screen
- Posters: [example](http://vignette1.wikia.nocookie.net/metroid/images/b/bb/Metroid_fusion.jpg/revision/latest?cb=20120706064821): Any images related to the game in general but not necessarily the software. This could be wallpaper, ads, banners, posters, etc.

#### Naming

You can place media files directly under the media directory, using the naming convention below:

\<software-file-name\>.\<id\>.\<type\>.\<image-ext\>

- **software-file-name**: Full, identical name of the matching software *including its file extention*
- **id**: Optional. You can add any text here. This helps when you have more than one media file per game
- **type**: Media type, should be one of the following:
	- *scr*: In game screenshot
	- *tit*: Title or intro screenshot
    - *pos*: Poster style image
- **image-ext**: The image's file extention. Suppoted formats: .png, .gif, .jpg & .bmp

For example, if your game is named:

**Super Mario World (U)[!].sfc**

Then a screenshot can be added using the appropriate naming scheme:

**Super Mario World (U)[!].sfc.001.scr.png**
        
[Back to top](#table-of-contents)

## Questions and issues

The github issue tracker is for bug reports and feature requests. Anything else, such as questions for help in using the library, should be posted in [StackOverflow](http://stackoverflow.com) using the tag [elevate-vg-gui](http://stackoverflow.com/questions/tagged/elevate-vg-gui)

## FAQ

### Can I make a theme for elevate?

If you know HTML/CSS/JS, then yes. And if you know AngularJS, much of the work is already done for you.

For reference, check out the current templates:

- [gridd](https://travis-ci.org/miniArray/gridd)
- [kamek](https://travis-ci.org/miniArray/kamek)

### Can you add `my feature` to elevate-vg-gui?

Feel free to add a request in the issue [issue tracker](https://github.com/miniArray/elevate-vg-gui/issues), or come chat with us on [Gitter](https://gitter.im/miniArray/elevate-vg-gui)

[![Issues](https://img.shields.io/github/issues-raw/miniArray/elevate-vg-gui.svg)](https://github.com/miniArray/elevate-vg-gui/issues) &nbsp;
[![Gitter](https://img.shields.io/gitter/room/miniArray/elevate-vg-gui.svg)](https://gitter.im/miniArray/elevate-vg-gui)

## Contributing

- [Contributing](docs/contributing/index.md)
  - [Versions: Release Names vs Version Numbers](docs/contributing/versions/index.md)

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard) &nbsp;
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) &nbsp;
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) &nbsp;
[![bitHound Dev Dependencies](https://www.bithound.io/github/miniArray/elevate-vg-gui/badges/devDependencies.svg)](https://www.bithound.io/github/miniArray/elevate-vg-gui/master/dependencies/npm)

## License

MIT License
2015 © Simon W. Jackson and [contributors](https://github.com/miniArray/elevate-vg-gui/graphs/contributors)
