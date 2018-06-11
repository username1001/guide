webpackJsonp([0xdee1b8fdef9],{4e3:function(e,n){e.exports={data:{markdownRemark:{html:'<h1>Introduction to an IDE and printing different text :</h1>\n<ul>\n<li>In the last article, some download links for software required for programming . Software like this is known as an IDE.\n<strong>IDE stands for Integrated Development Environment</strong></li>\n</ul>\n<h2>IDEs mainly consist of 3 kinds of software :</h2>\n<p><strong>1 Editor :</strong> A slightly modified text editor to make coding easy. An example of an editor for coding is Notepad++.</p>\n<p><strong>2 Debugger :</strong> Software that helps you find errors in your program , and resolve them before execution. Imagine FaceBook crashing on loading an application or a game crashing all of a ssudden. To prevent faulty execution of a program, the debugger is a programmer’s best friend.</p>\n<p><strong>3 Compiler :</strong> A compiler is that part of the computer which converts your high level program code to simple machine code : 0s &#x26; 1s ; so that a computer understands the commands and executes them. From now on , we will be uding the word <strong>compiler</strong> frequently.</p>\n<p><em>Q : Try searching for an IDE on Google and run your first program on it . Check the output</em></p>\n<p>Now, install the IDE and try changing the text from the program in the last article.</p>\n<h3>Changing text on C++</h3>\n<ul>\n<li>To change text ,change what’s typed in the <code>""</code> after <code>cout&#x3C;&#x3C;</code></li>\n</ul>\n<p>A sample program :</p>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code><span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;iostream></span></span>\n<span class="token keyword">using</span> <span class="token keyword">namespace</span> std <span class="token operator">:</span>\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    cout <span class="token operator">&lt;&lt;</span> <span class="token string">"I Love freeCodeCamp ! "</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The above code returns an error because at line 2, we have used a colon(:) instead of a semicolon(;)\nSo, let’s debug the error:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c++"><code>#include <iostream>\nusing namespace std ;\nint main()\n{\n    cout << "I Love freeCodeCamp ! ";\n    return 0;\n}</code></pre>\n      </div>\n<p>Note that now the program runs perfectly.\nThe output will be : <code>I Love freeCodeCamp!</code></p>\n<h3>Now , let’s change the text to something else like this:</h3>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code>    cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Hello World!\\t I love freeCodeCamp!"</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The output will be something different this time:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Hello World!\t I love freeCodeCamp!</code></pre>\n      </div>\n<p>If you realised , the <code>\\t</code> command created a <em>tab space</em> between the two texts . This is one kind of special command in C++. These special commands are known as <em>Escape Sequences</em> .\nThey are used to print certain special characters a compiler cannot display.</p>\n<h4>Useful escape sequences:</h4>\n<ul>\n<li><code>\\\'</code> to print a single inverted comma</li>\n<li><code>\\"</code> to print a double inverted comma</li>\n<li><code>\\n</code> to print on a new line</li>\n<li><code>\\t</code> for a horizontal tab</li>\n<li><code>\\f</code> for a new page</li>\n<li><code>\\\\</code> for a backslash</li>\n<li><code>\\?</code> for a question mark</li>\n</ul>\n<h5>Now, let’s try printing numbers and special characters with some escape sequences:</h5>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code>    cout <span class="token operator">&lt;&lt;</span> <span class="token string">"40158 \\t 236708 ! \\n \\\\ @ \\?"</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The output changes to:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>40158 \t 236708 ! \n \\ @ ?</code></pre>\n      </div>\n<h5>Let’s try some other ways of printing:</h5>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code>    cout <span class="token operator">&lt;&lt;</span> <span class="token string">"1+2"</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\n    cout <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token operator">+</span><span class="token number">2</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Output:</p>\n<ul>\n<li>The first output statement is <code>1+2</code></li>\n<li>The second output statement is <code>3</code></li>\n</ul>\n<p>This is because we did not add the inverted commas for the second print statement and so, the compiler added the numbers before printing them.</p>\n<h4>Comments:</h4>\n<ul>\n<li>Comments are an important feature of many programming languages. They allow the programmer to take notes for self help, and won’t affect the running of the program.</li>\n</ul>\n<p><strong>The different types of comments and Syntax of a comment</strong>:\n1 <code>//</code>  ~ <em>Single Line Comments</em>  : The length of these comments is 1 line (the line it is typed on) .\n2 <code>/* */</code> ~ <em>Multi Line Comments</em> : These comments can take up a space of more than one line.</p>\n<h4>Example of using comments:</h4>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code>    cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Hello Comment"</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">//cout&lt;&lt;"Hello Comment"&lt;&lt;endl; , Single Line Comment.</span>\n    \n   <span class="token comment" spellcheck="true">/* This is an example of a multi line comment. No output is generated for this .\n   I now end the comment.  :) */</span>\n</code></pre>\n      </div>\n<p>The output will be :</p>\n<p><code>Hello Comment</code></p>\n<p>As you may notice, the comments are ignored during program execution and do not show up on checking the output of the program.\nIt should be noted that while comments do add an extra level of readability to one’s code, it’s a bad habit to rely too heavily on comments to describe the logic in your code. In general, your code should speak for itself and reflect the intention of the programmer.</p>\n<p>As you may notice, the comments are ignored during program execution and do not show up on checking the output of the program.</p>\n<h4>Operators</h4>\n<ul>\n<li>Operators allow you to compare two or more expressions</li>\n<li><code>==</code> equal to</li>\n<li><code>!=</code>  not equal to</li>\n<li><code>&#x3C;</code> less than</li>\n<li><code>></code> greater than</li>\n<li><code>&#x3C;=</code> less than or equal to</li>\n<li><code>>=</code> greater than or equal to</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code>    <span class="token punctuation">(</span><span class="token number">7</span><span class="token operator">==</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n</code></pre>\n      </div>\n<p>This evaluates to false</p>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code>    <span class="token punctuation">(</span><span class="token number">7</span><span class="token operator">!=</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n</code></pre>\n      </div>\n<p>This evaluates to true</p>\n<p><a href=\'https://repl.it/L4ox\' target=\'_blank\' rel=\'nofollow\'>A summation of all the print statements used in this article. Feel free to tweak around woth the code ! :) </a></p>',fields:{slug:"/cplusplus/terms-to-know-for-beginners/"},frontmatter:{title:"IDE and Printing different text"}}},pathContext:{slug:"/cplusplus/terms-to-know-for-beginners/"}}}});
//# sourceMappingURL=path---cplusplus-terms-to-know-for-beginners-8f945aaffceade419a38.js.map