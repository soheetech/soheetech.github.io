# frozen_string_literal: true

source "https://rubygems.org"

gem "kramdown-parser-gfm"

gemspec

group :jekyll_plugins do
  gem "jekyll-last-modified-at"
end

gem 'rouge'
require 'rouge'

# make some nice lexed html
source = File.read('/etc/bashrc')
formatter = Rouge::Formatters::HTML.new
lexer = Rouge::Lexers::Shell.new
formatter.format(lexer.lex(source))

# Get some CSS
Rouge::Themes::Base16.mode(:light).render(scope: '.highlight')
# Or use Theme#find with string input
Rouge::Theme.find('base16.light').render(scope: '.highlight')
