require 'rubygems'
require 'rake'
require 'rdoc'
require 'date'
require 'yaml'
require 'tmpdir'
require 'jekyll'

desc "Generate the website"
task :generate do
  Jekyll::Site.new(Jekyll.configuration({
    "source"      => ".",
    "destination" => "_site"
  })).process
end

desc "Generate and publish the website"
task :publish => [:generate] do
  Dir.mktmpdir do |tmp|
    system "mv _site/* #{tmp}"
    system "git branch -D master"
    system "git checkout --orphan master"
    system "git rm -rf ."
    system "mv #{tmp}/* ."
    system "touch .nojekyll"
    message = "Site updated at #{Time.now.utc}"
    system "git add ."
    system "git commit -am #{message.shellescape}"
    system "git push origin master --force"
    system "git checkout code"
  end
end

task :default => :publish