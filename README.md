   - Evil twin attack on android (alk99)*root requered
@abderrahaman 


###### this script is for educational purposes only DO NOT BE EVIL
this attack is similar to fluxion and linset but in an other plateforme



## video tuto=> https://youtu.be/CyyDLul2VJk




# alk99


# Requerements:
- csploit

- iptables binary

- termux

 - android webserver (php server )


# how to install 


- open csploit garnt superuser permition  install new core and wait until it finished extracting close the app 
en termux and wait until it done installing 
type on termux :
     ```
        pkg install tsu
        pkg install git
        exit
        exit
     ```
- open server for php ( or any other android webserver support php)
 install the newest package
  copy the default page (files index...) or the page you prefer from “fake pages “ go to you internelal storage WWW and public past it here and go to server for php start hotspot tether of your mobile and in server for php choose wlan0  192.168.43.1 click on start server 
go to your browser and type http://192.168.43.1:8080
now all working

clone the folder
- open termux  type :  
```
   git clone https://github.com/soyalk/clone-download-alk-evil-twin.git
   cd clone-download-alk-evil-twin
   tsu
   bash install.sh
```

wait until it finish instaling
now type:
```
  exit
  exit
```
and open termux and type:   #(now the server must be started and the client must be connected)
```
  tsu
  alk99 
```   




 alk99-evil-twin-on-andoid-v1
    Copyright (C) 2018  by abderrahman 

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
     any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.











