#!/bin/bash

# Expand PATH
export PATH=$HOME/bin:/usr/local/bin:/usr/local/sbin:$PATH
export NODE_PATH=/usr/local/lib/node_modules:$NODE_PATH

# Add NPM-installed bins to PATH
export PATH=/usr/local/share/npm/bin:$PATH

# Add Composer-installed bins to PATH
export PATH=$HOME/.composer/vendor/bin:$PATH

# Configure prompt. (via http://neverstopbuilding.net/gitpro/)
MAGENTA="\[\033[0;35m\]"
YELLOW="\[\033[0;33m\]"
BLUE="\[\033[34m\]"
LIGHT_GRAY="\[\033[0;37m\]"
CYAN="\[\033[0;36m\]"
GREEN="\[\033[0;32m\]"
RESET="\[\e[m\]"
GIT_PS1_SHOWDIRTYSTATE=true

export PS1=$GREEN"★ \u@\h"'$(
    if [[ $(__git_ps1) =~ \*\)$ ]]
    then echo "'$YELLOW'"$(__git_ps1 " (%s)")
    elif [[ $(__git_ps1) =~ \+\)$ ]]
    then echo "'$MAGENTA'"$(__git_ps1 " (%s)")
    else echo "'$CYAN'"$(__git_ps1 " (%s)")
    fi)'$BLUE" \w"$RESET": "

# I like colors.
export CLICOLOR=1
export GREP_OPTIONS='--color=auto'
alias ls="ls --color=always"

# Don't check mail when opening terminal.
unset MAILCHECK

# My aliases
alias be="bundle exec"
alias ta="tmux attach-session"
alias fs="foreman start"
alias ts="tig status"

# Run OS specific profile
FILENAME=~/.bash_profile-$(uname)
[ -f $FILENAME ] && source $FILENAME

# Enable autocompletion for elixir/iex/mix
source $HOME/bin/all_elixir_auto_complete.bash

# Execute local .bash_profile if available
[ -e "$HOME/.bash_profile.local" ] && source "$HOME/.bash_profile.local"
