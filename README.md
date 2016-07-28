# Ascent

> A themable game launcher for PC

## Table of Contents

- [Supported OS](#supported-os)
- [Supported Launchers](#supported-launchers)
- [Install](#install)
- [Naming Schemes](#naming-schemes)
	- [Software (games)](#software-games)
	- [Launchers (emulators, steam, etc)](#launchers-emulators-steam-etc)
	- [Media (screenshots, etc)](#media-screenshots-etc)
- [FAQ](#faq)
- [Releases Notes](#releases-notes)
- [Contributors](#contributors)
- [License](#license)




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

- [Zelda Classic](http://www.zeldaclassic.com/)
- [Steam](htp://steampowered.com)


- Nintendo Entertainment System / Famicom / Famicom Disk System (NES/FDS)
- Super Nintendo (SNES)
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

## Install

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/miniArray/ascent.git
# Go into the repository
cd ascent
# Install dependencies and run the app
npm install
```

[Back to top](#table-of-contents)

## Setup 

You will need to set a root folder where Ascent will look for **games**, **launchers**, **images**, etc. 
For example: *C:\ascent*
From your command line:

```bash
# Run the setup
npm run setup
```

Currently, Ascent adheres to a strict directory layout to simplify development during alpha stages. Expect this to be more flexible in the future.

[Back to top](#table-of-contents)

### Ascent folder

* \<ascent-dir\>: Ascent's root directory **ex: C:\ascent**
	* \software: Game software (roms, exe, etc). See [software naming schemes](#)
    * \utilities: A few utility applications to help with launching
    * \media: Screenshots and other imagery. See [media naming schemes](#)
    * \firmware: Platform BIOS and other firmware files.
    * \launchers: Emulators and other software launchers. See [launcher naming schemes](#)
    
## Naming Schemes

### Software (games)

> Future releases will be less strict with software location

The software directory contains subfolders with the appropriate platform name (created during initial setup). *Games not placed in the appropriate platform subfolder will be ignored*

* \<ascent-dir\>\software
	* atari-2600
    * flash
    * nintendo-entertainment-system-nes
	* steam-win
    * win
    * zelda-classic
    * ..
    
Game software (roms, executables, etc) can be placed in its appropriate platform directory.

* \<ascent-dir\>\software\nintendo-entertainment-system-nes
	* super mario bros 3.nes
	* Kirby s Adventure (U) (PRG 1) [!].nes
    * ..
    
Game software can be named how ever you like, just make sure the appropriate extention is still there.

[Back to top](#table-of-contents)

### Launchers (emulators, steam, etc)

> Caveat: For now, Steam **must** be installed in the \<ascent-dir\>\software\steam-win directoy.

Launchers are the applications that let you run games that cant be executed directly wether it be DRM or emulation.

> BizHawk launcher is downloaded and installed during setup

[List of supported launchers](#)

Directly under the launchers directory should place launchers with the folowing folder naming scheme:

\<launcherName\>\\\<release-os-arch\>

Example:

- \<ascent-dir\>\launchers
	- \BizHawk
    	- \1.11.6-win-x86
    	- \0.9.22-win-x86

Some games work better (or worse) on particular launcher releases (im looking at you [dolphin](https://dolphin-emu.org))

If you dont care/want to deal with release directories just name one folder **latest** and place launcher files inside.

Example:

- \<ascent-dir\>\launchers
	- \BizHawk
    	- \latest
        	- EmuHawk.exe
            - ..

[Back to top](#table-of-contents)

### Media (screenshots, etc)

> Media scanning is an early stage of development

Media files are the images that ascent will display for a particular game such as screenshots and box art.

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

        
## FAQ

### My games/screenshots arent showing up after scan

1. naming convention
2. launcher

### Can I make a theme for Ascent?

If you know HTML/CSS/JS, then yes. And if you know AngularJS, much of the work is already done for you.

For reference, check out the current templates:

- [gridd](https://travis-ci.org/miniArray/gridd)
- [kamek](https://travis-ci.org/miniArray/kamek)

There is also an Angular service that makes it a bit easier to control Ascent:

- [propellant](https://travis-ci.org/miniArray/propellant)

[Back to top](#table-of-contents)


## Releases Notes

New releases notes are together with releases in GitHub at: https://github.com/miniArray/ascent/releases

[Back to top](#table-of-contents)


## Contributors

* Simon W. Jackson ([@miniArray](https://twitter.com/miniArray))

[Back to top](#table-of-contents)


## License

The MIT License

Copyright (c) 2014 Martin Gontovnikas http://www.gon.to/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[Back to top](#table-of-contents)
