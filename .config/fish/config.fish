# Path to your oh-my-fish.
set fish_path $HOME/.oh-my-fish

# Theme
set fish_theme robbyrussell

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-fish/plugins/*)
# Custom plugins may be added to ~/.oh-my-fish/custom/plugins/
# Example format: set fish_plugins autojump bundler

# Path to your custom folder (default path is $FISH/custom)
#set fish_custom $HOME/dotfiles/oh-my-fish
set fish_plugins git 

# chruby-fish
source /usr/local/share/chruby/chruby.fish
source /usr/local/share/chruby/auto.fish

# Load oh-my-fish configuration.
. $fish_path/oh-my-fish.fish

# Custom stuff
set PATH $PATH /usr/local/mysql/bin
# set -x DYLD_LIBRARY_PATH /usr/local/mysql/lib $DYLD_LIBRARY_PATH
set PATH /usr/local/openresty/bin /usr/local/openresty/nginx/sbin $PATH

alias cxss="fswatch-run . 'xing s s'"
