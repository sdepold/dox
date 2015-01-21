/**
 * Module dependencies.
 */

var dox = require('../')
  , should = require('should')
  , fs = require('fs');

function fixture(name, fn) {
  fs.readFile(__dirname + '/fixtures/' + name, 'utf8', fn);
}

module.exports = {
  'test .parseComments() multiline tags': function(done){
    fixture('multilinetags.js', function(err, str){
      var comments = dox.parseComments(str)
        , only = comments.shift()
        , first = comments.shift()
        , last = comments.shift()
        , mid = comments.shift()
        , onlyParam = comments.shift()
        , firstParam = comments.shift()
        , lastParam = comments.shift()
        , midParam = comments.shift()
        , onlyReturn = comments.shift()
        , firstReturn = comments.shift()
        , lastReturn = comments.shift()
        , midReturn = comments.shift()
        , example = comments.shift();

      only.tags.should.with.lengthOf(1);
      only.tags[0].string.should.equal('<p>one<br />two<br />three</p>');
      first.tags.should.with.lengthOf(2);
      first.tags[0].string.should.equal('<p>one<br />two<br />three</p>');
      first.tags[1].string.should.equal('<p>last</p>');
      last.tags.should.with.lengthOf(2);
      last.tags[0].string.should.equal('<p>first</p>');
      last.tags[1].string.should.equal('<p>one<br />two<br />three</p>');
      mid.tags.should.with.lengthOf(3);
      mid.tags[0].string.should.equal('<p>first</p>');
      mid.tags[1].string.should.equal('<p>one<br />two<br />three</p>');
      mid.tags[2].string.should.equal('<p>last</p>');

      onlyParam.tags.should.with.lengthOf(1);
      onlyParam.tags[0].type.should.equal('param');
      onlyParam.tags[0].name.should.equal('foo');
      onlyParam.tags[0].types.should.eql(['String']);
      onlyParam.tags[0].description.should.equal('<p>one<br />two<br />three</p>');
      firstParam.tags.should.with.lengthOf(2);
      firstParam.tags[0].type.should.equal('param');
      firstParam.tags[0].name.should.equal('foo');
      firstParam.tags[0].types.should.eql(['String']);
      firstParam.tags[0].description.should.equal('<p>one<br />two<br />three</p>');
      firstParam.tags[1].string.should.equal('<p>last</p>');
      lastParam.tags.should.with.lengthOf(2);
      lastParam.tags[0].string.should.equal('<p>first</p>');
      lastParam.tags[1].type.should.equal('param');
      lastParam.tags[1].name.should.equal('foo');
      lastParam.tags[1].types.should.eql(['String']);
      lastParam.tags[1].description.should.equal('<p>one<br />two<br />three</p>');
      midParam.tags.should.with.lengthOf(3);
      midParam.tags[0].string.should.equal('<p>first</p>');
      midParam.tags[1].type.should.equal('param');
      midParam.tags[1].name.should.equal('foo');
      midParam.tags[1].types.should.eql(['String']);
      midParam.tags[1].description.should.equal('<p>one<br />two<br />three</p>');
      midParam.tags[2].string.should.equal('<p>last</p>');

      onlyReturn.tags.should.with.lengthOf(1);
      onlyReturn.tags[0].type.should.equal('return');
      onlyReturn.tags[0].types.should.eql(['String']);
      onlyReturn.tags[0].description.should.equal('<p>one<br />two<br />three</p>');
      firstReturn.tags.should.with.lengthOf(2);
      firstReturn.tags[0].type.should.equal('return');
      firstReturn.tags[0].types.should.eql(['String']);
      firstReturn.tags[0].description.should.equal('<p>one<br />two<br />three</p>');
      firstReturn.tags[1].string.should.equal('<p>last</p>');
      lastReturn.tags.should.with.lengthOf(2);
      lastReturn.tags[0].string.should.equal('<p>first</p>');
      lastReturn.tags[1].type.should.equal('return');
      lastReturn.tags[1].types.should.eql(['String']);
      lastReturn.tags[1].description.should.equal('<p>one<br />two<br />three</p>');
      midReturn.tags.should.with.lengthOf(3);
      midReturn.tags[0].string.should.equal('<p>first</p>');
      midReturn.tags[1].type.should.equal('return');
      midReturn.tags[1].types.should.eql(['String']);
      midReturn.tags[1].description.should.equal('<p>one<br />two<br />three</p>');
      midReturn.tags[2].string.should.equal('<p>last</p>');

      example.tags.should.with.lengthOf(1);
      example.tags[0].string.should.equal('<pre><code>test(one);\ntest(two);\n</code></pre>');
      done();
    });
  }
};

