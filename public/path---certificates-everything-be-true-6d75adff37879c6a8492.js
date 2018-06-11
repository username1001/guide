webpackJsonp([0xbc5741bf34a4],{3652:function(e,o){e.exports={data:{markdownRemark:{html:'<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/d/d69c7f2d86b8902a9bc83653d95932115de47e6a.jpg"></p>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3" title=":triangular_flag_on_post:" alt=":triangular_flag_on_post:" class="forum-image"> Remember to use <a><strong><code>Read-Search-Ask</code></strong></a> if you get stuck. Try to pair program <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3" title=":busts_in_silhouette:" alt=":busts_in_silhouette:" class="forum-image"> and write your own code <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3" title=":pencil:" alt=":pencil:" class="forum-image"></p>\n<h3><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3" title=":checkered_flag:" alt=":checkered_flag:" class="forum-image"> Problem Explanation:</h3>\n<p>The program needs to check if the second argument is a <a href=\'http://forum.freecodecamp.com/t/javascript-truthy-value/15975\' target=\'_blank\' rel=\'nofollow\'>truthy</a> element, and it must check this for each object in the first argument.</p>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-truthy-value/15975\' target=\'_blank\' rel=\'nofollow\'>JavaScript Truthy</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-arguments/14283.md\' target=\'_blank\' rel=\'nofollow\'>JavaScript Arguments</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 1</h2>\n<p>Remember to iterate through the first argument to check each object.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 2</h2>\n<p>Only if all of them are truth will we return true, so make sure all of them check.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 3</h2>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<p>You could use loops or callbacks functions, there are multiple ways to solve this problem.</p>\n<h2>Spoiler Alert!</h2>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif" alt="warning sign"></p>\n<p><strong>Solutions ahead!</strong></p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3" title=":beginner:" alt=":beginner:" class="forum-image"> Basic Code Solution:</h2>\n<p><strong>Using for-in loop &#x26; hasOwnProperty</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function truthCheck(collection, pre) {\n  // Create a counter to check how many are true.\n  var counter = 0;\n  // Check for each object\n  for (var c in collection) {\n    // If it is has property and value is truthy\n    if (collection<a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"\' target=\'_blank\' rel=\'nofollow\'>c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {\n      counter++;\n    }\n  }\n  // Outside the loop, check to see if we got true for all of them and return true or false\n  return counter == collection.length;\n}\n\n// test here\ntruthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLnw/0\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>First I create a counter to check how many cases are actually true.</li>\n<li>Then check for each object if the value is truthy</li>\n<li>Outside the loop, I check to see if the counter variable has the same value as the length of <strong>collection</strong>, if true then return <strong>true</strong>, otherwise, return <strong>false</strong></li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-loops/14681\' target=\'_blank\' rel=\'nofollow\'>JS Loops</a></li>\n<li><a href=\'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty\' target=\'_blank\' rel=\'nofollow\'>Object.prototype.hasOwnProperty()</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3" title=":sunflower:" alt=":sunflower:" class="forum-image"> Intermediate Code Solution:</h2>\n<p><strong>Using Array.every()</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function truthCheck(collection, pre) {\n  return collection.every(function (element) {\n    return element.hasOwnProperty(pre) && Boolean(element<a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"\' target=\'_blank\' rel=\'nofollow\'>pre]);\n  });\n}\n\n// test here\ntruthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLny/0\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>Uses the native “every” method to test whether all elements in the array pass the test.</li>\n<li>This link will help <a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every\' target=\'_blank\' rel=\'nofollow\'>Array.prototype.every()</a></li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-array-prototype-every/14287\' target=\'_blank\' rel=\'nofollow\'>JS Array.prototype.every()</a></li>\n<li><a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every\' target=\'_blank\' rel=\'nofollow\'>MDN Array.prototype.every()</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3" title=":rotating_light:" alt=":rotating_light:" class="forum-image"> Advanced Code Solution:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function truthCheck(collection, pre) {\n  // Is everyone being true?\n  return collection.every(obj => obj<a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"\' target=\'_blank\' rel=\'nofollow\'>pre]);\n}\n\ntruthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/E2u6/0\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>For <em>every</em> object in the <code>collection</code> array, check the truthiness of object’s property passed in <code>pre</code> parameter</li>\n<li><code>Array#every</code> method internally checks if the value returned from the callback is truthy.</li>\n<li>Return <code>true</code> if it passes for <em>every</em> object. Otherwise, return <code>false</code>.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'http://devdocs.io/javascript/global_objects/array/every\' target=\'_blank\' rel=\'nofollow\'><code>Array#every</code></a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3" title=":clipboard:" alt=":clipboard:" class="forum-image"> NOTES FOR CONTRIBUTIONS:</h2>\n<ul>\n<li><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong>DO NOT</strong> add solutions that are similar to any existing solutions. If you think it is <strong><em>similar but better</em></strong>, then try to merge (or replace) the existing similar solution.</li>\n<li>Add an explanation of your solution.</li>\n<li>Categorize the solution in one of the following categories — <strong>Basic</strong>, <strong>Intermediate</strong> and <strong>Advanced</strong>. <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3" title=":traffic_light:" alt=":traffic_light:" class="forum-image"></li>\n<li>Please add your username only if you have added any <strong>relevant main contents</strong>. (<img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong><em>DO NOT</em></strong> <em>remove any existing usernames</em>)</li>\n</ul>\n<blockquote>\n<p>See <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3" title=":point_right:" alt=":point_right:" class="forum-image"> <a href=\'http://forum.freecodecamp.com/t/algorithm-article-template/14272\' target=\'_blank\' rel=\'nofollow\'><strong><code>Wiki Challenge Solution Template</code></strong></a> for reference.</p>\n</blockquote>',fields:{slug:"/certificates/everything-be-true/"},frontmatter:{title:"Everything Be True"}}},pathContext:{slug:"/certificates/everything-be-true/"}}}});
//# sourceMappingURL=path---certificates-everything-be-true-6d75adff37879c6a8492.js.map