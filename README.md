# PS4 Remote PKG Sender

<p align="center">
  <img src="Screenshot.jpg">
</p>

## English
Remastering of the software created by [iref-use](https://github.com/iref-use/ps4-remote-pkg-sender).

I incorporated the fact of changing the design very easily by editing the config.json file

all you have to do is simply with any text editor, open the file to change the value of theme to enter the name of the theme folder that you will have placed in the theme folder.

`Path of JSON file:`

    ` \resources\app\config.json`

`Path of Theme folder:`

    ` \resources\app\theme`

`What the config.json file contains:`
```json
{
   "theme":"dark"
}
```

I also fixed the problem with torrent which sometimes load files that were not pkg files.


## Français
Remasterisation du logiciel créé par [iref-use](https://github.com/iref-use/ps4-remote-pkg-sender).

j'ai incorporer le fait de changer de design trés facilement en éditant le fichier config.json

il vous suffit tout simplement avec n'importe quel éditeur de texte, d'ouvrir le fichier pour changer la valeur de theme pour renseigner le nom du dossier du théme que vous aurier placer dans le dossier theme.

`Chemin du fichier JSON:`

    ` \resources\app\config.json`

`Chemin du dossier de Thème:`

    ` \resources\app\theme`

`Ce que contien le fichier config.json :`
```json
{
   "theme":"dark"
}
```

j'ai aussi corriger le problème avec les torrent qui charger des fois des fichier qui n'était pas des fichier pkg.

## README of [iref-use](https://github.com/iref-use/ps4-remote-pkg-sender) PS4 Remote PKG Sender

PS4 REMOTE PKG SENDER based on Electron + Express + WebTorrent  

DO NOT CLOSE THE APPLICATION BEFORE THE TASK(S) ON PS4 IS NOT COMPLETED  

PS4:  
start HEN V1.8  
start flatz's Remote installer PKG  

PC:  
start the ps4remotepkgsender.exe  
select your local PC IP address  
insert IP from your PS4  
choose the PKG from your PC  
click to SEND button  

PC + WebTorrent:  
start the ps4remotepkgsender.exe  
select your local PC IP address  
insert IP from your PS4  
paste Magnet Link to magnet link input  
click to START TORRENT SERVER AND SEND button  

Credits: Thanks to flatz, Specter, xvortex