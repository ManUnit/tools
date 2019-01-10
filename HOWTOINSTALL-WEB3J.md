# How to install web3j Java play Ethereum 
# Step1
- Preparing for LinuxBrew – Debian/Ubuntu
- For Debian/Ubuntu-based systems, run the following commands:
```ruby
$ sudo apt-get update
$ sudo apt-get upgrade -y
$ sudo apt-get install -y build-essential make cmake scons curl git \
                               ruby autoconf automake autoconf-archive \
                               gettext libtool flex bison \
                               libbz2-dev libcurl4-openssl-dev \
                               libexpat-dev libncurses-dev
```

# step 2
– Clone LinuxBrew
- To keep things tidy, clone LinuxBrew into a hidden directory in the user’s home directory:
```ruby
                               
git clone https://github.com/Homebrew/linuxbrew.git ~/.linuxbrew
       
```

# step 3 Update environment variables
- The next step is to add LinuxBrew to the user’s environment variables.
- Add the following lines to the end of the user’s ~/.bashrc file:

```ruby
                               
# Until LinuxBrew is fixed, the following is required.
# See: https://github.com/Homebrew/linuxbrew/issues/47
export PKG_CONFIG_PATH=/usr/local/lib/pkgconfig:/usr/local/lib64/pkgconfig:/usr/lib64/pkgconfig:/usr/lib/pkgconfig:/usr/lib/x86_64-linux-gnu/pkgconfig:/usr/lib64/pkgconfig:/usr/share/pkgconfig:$PKG_CONFIG_PATH
## Setup linux brew
export LINUXBREWHOME=$HOME/.linuxbrew
export PATH=$LINUXBREWHOME/bin:$PATH
export MANPATH=$LINUXBREWHOME/man:$MANPATH
export PKG_CONFIG_PATH=$LINUXBREWHOME/lib64/pkgconfig:$LINUXBREWHOME/lib/pkgconfig:$PKG_CONFIG_PATH
export LD_LIBRARY_PATH=$LINUXBREWHOME/lib64:$LINUXBREWHOME/lib:$LD_LIBRARY_PATH
```

# step 4 Run update brew before install web3j
- request relogin or run bash command $bash to get new environment of bashrc
```ruby
$ bash
$ brew update
```
# step 5 install brew tap web3j/web3j and install web3j 
```ruby
$ brew tap web3j/web3j 
$ brew install web3j 
```
# step 6 run test web3j
```ruby
user:~$ web3j

              _      _____ _     _        
             | |    |____ (_)   (_)       
__      _____| |__      / /_     _   ___  
\ \ /\ / / _ \ '_ \     \ \ |   | | / _ \ 
 \ V  V /  __/ |_) |.___/ / | _ | || (_) |
  \_/\_/ \___|_.__/ \____/| |(_)|_| \___/ 
                         _/ |             
                        |__/              

Usage: web3j version|wallet|solidity .
```
