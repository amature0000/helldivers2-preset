# Helldivers 2 stratagem preset
### In this project, I use assets from the following project :
- [nvigneux/Helldivers-2-Stratagems-icons-svg](https://github.com/nvigneux/Helldivers-2-Stratagems-icons-svg)

- [dom-to-image](https://github.com/tsayen/dom-to-image)

## This project is published to GitHub Pages.

This project is a simple implementation. Key features are:
- To Make your helldivers 2 stratagem loadout
- Download image of your own loadout
- Copy and paste this url to share your loadout settings

You are free to use this project for your own projects.

# ENG - KOR converter program
### Introduction
this program is a Python-based application. It monitors your keyboard input, converts&assembles to **Korean string**, and replaces the original **English string**. this program works well in the Helldivers2 game.

## How to run
1. Download [`runme.exe`](./engkorconv/dist/runme.exe) and [`config.json`](./engkorconv/dist/config.json) 
    - or you can download this [zip file](./engkorconv/download.zip)
2. Place both files in the same directory and run `runme.exe` 
    - `config.json` is optional; missing config file will make program run as default settings
3. Press the `start key` to start recording your keyboard input, and press the `end key` to stop recording and print your inputs.
    - If the `start key` and `end key` are the same, it will function as a `toggle key`.
4. Press the `esc` key to reset the program.
5. You can change the operation key editting `config.json`

## Reference
I used the Eng-Kor converter code from this [blog post](https://mizykk.tistory.com/115). Please refer to it for more details.
