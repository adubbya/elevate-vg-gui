# electron-quick-start

**Clone and run for a quick way to see an Electron in action.**

This is a minimal Electron application based on the [Quick Start Guide](http://electron.atom.io/docs/latest/tutorial/quick-start) within the Electron documentation.

**Use this app along with the [Electron API Demos](http://electron.atom.io/#get-started) app for API code examples to help you get started.**

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](http://electron.atom.io/docs/latest/tutorial/quick-start).

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

## Setup 

You will need to set a root folder where Ascent will look for **games**, **launchers**, **images**, etc. 
For example: *C:\ascent*
From your command line:

```bash
# Run the setup
npm run setup
```

Currently, Ascent adheres to a strict directory layout to simplify development during alpha stages. Expect this to be more flexible in the future.

### Ascent folder

* ascent-dir: **ex: C:\ascent**
	* \software: Game software (roms, exe, etc). See [software naming schemes](#)
    * \utilities: A few utility applications to help with launching
    * \media: Screenshots and other imagery. See [media naming schemes](#)
    * \firmware: Platform BIOS and other firmware files.
    * \launchers: Emulators and other software launchers. See [launcher naming schemes](#)
    
## Naming Schemes

### Software (games)

> Future releases will be less strict with software location

The software directory contains subfolders with the appropriate platform name (created during initial setup). *Games not placed in the appropriate platform subfolder will be ignored*

* ascent-dir\software
	* atari-2600
    * flash
    * nintendo-entertainment-system-nes
	* steam-win
    * win
    * zelda-classic
    * ..
    
Game software (roms, executables, etc) can be placed in its appropriate platform directory.

* ascent-dir\software\nintendo-entertainment-system-nes
	* super mario bros 3.nes
	* Kirby s Adventure (U) (PRG 1) [!].nes
    * ..
    
Game software can be named how ever you like, just make sure the appropriate extention is still there.

### Launchers (emulators, steam, etc)

> Caveat: For now, Steam **must** be installed in the ascent-dir\software\steam-win directoy.

Launchers are the applications that let you run games that cant be executed directly wether it be DRM or emulation.

> BizHawk launcher is downloaded and installed during setup

[List of supported launchers](#)

Directly under the launchers directory should place launchers with the folowing folder naming scheme:

<launcherName>\<release-os-arch>

Example:

* ascent-dir\launchers
	* \BizHawk
    	* \1.11.6-win-x86
    	* \0.9.22-win-x86

Some games work better (or worse) on particular launcher releases im looking at you [https://dolphin-emu.org/](dolphin)

If you dont care/want to deal with release directories just name it **latest**

Example:

* ascent-dir\launchers
	* \BizHawk
    	* \latest
        
#### License [MIT](LICENSE.md)
