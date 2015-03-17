casper.start('http://phase2technology.com/blog/css-testing-with-phantomcss-phantomjs-casperjs-and-grunt/')
  .then(function() {
    phantomcss.screenshot('.entry-title', 'entry-title');
  })
  .then(function() {
    phantomcss.screenshot('.authors-with-images', 'authors-with-images-hover');
  })
;
