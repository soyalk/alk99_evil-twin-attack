#!/bin/bash
####alk99###
clear ;
echo "instalation-of-evil-twin-for-android-by-alk99";
printf "\n\n\n"
echo "intalling iptables....";
echo "what is the type of your processor ?" ;
printf " 1)ARM \n 2)ARM_V7 \n 3) x86 \n " ;
read input ;
if  [[ $input == "1" ]] ; then { cd iptablesall/armeabi/ ; cp iptables /data/data/com.termux/files/usr/bin/   ; cd .. ; cd .. ; 
}
elif [[ $input == "2" ]] ; then { cd /iptablesall/armv7/ ; cp iptables /data/data/com.termux/files/usr/bin/ ;
}
fi
echo "iptables copy done ok!" && sleep 2
echo "installing packages ...." ;
echo instaling<alk99>......... && sleep 3 ;
apt-get install unzip   ;
unzip A.bashrc -d /data/data/com.termux/files/home/ ;
mv etter.conf /data/data/org.csploit.android/files/tools/ettercap/share/ ;
mv .bashrc  /data/data/com.termux/files/home ;
apt-get update ;
apt-get install figlet ;
apt-get install toilet ;



echo "packages status => ok !;" && sleep 2 ;
echo install = donne  ready to use && sleep 2 ;
