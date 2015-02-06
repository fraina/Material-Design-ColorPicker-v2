desc "Generate flat files"
task :generate do
  puts "## Generating site"
  system "rm -rf gh-pages"
  system "mkdir gh-pages"
  system "cp -r build/* gh-pages/"
  cd "gh-pages" do
    system "git init"
    system "git remote add github git@github.com:Fraina/Material-Design-ColorPicker-v2.git"
  end
end

desc "Push the build to GitHub"
task :push do
  puts "## Deploying build to GitHub Pages"
  cd "gh-pages" do
    system "git add ."
    system "git add -u"
    system "git commit -m \"Site updated at #{Time.now.utc}\""
    system "git push github master:gh-pages --force"
  end
end

desc "Generate flat files and deploy to GitHub Pages"
task :deploy => [:generate, :push] do
end